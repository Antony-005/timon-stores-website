'use client';

import { useEffect, useState } from 'react';
import RecordCard from '@/components/admin/RecordCard';
import { useToast } from '@/context/ToastContext';

export default function AdminInquiries() {
  const { showToast } = useToast();
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    const token = localStorage.getItem('timon_admin_token');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setInquiries(await res.json());
    setLoading(false);
  }

  async function handleUpdateStatus(type, id, status) {
    const token = localStorage.getItem('timon_admin_token');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      showToast(`Marked as ${status}`);
      fetchInquiries();
    } catch {
      showToast('Could not update status', 'error');
    }
  }

  let filtered = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase()) ||
      inq.phone.includes(search);
    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  filtered = filtered.sort((a, b) => {
    const dateA = new Date(a.submitted_at);
    const dateB = new Date(b.submitted_at);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="mb-6">Inquiries ({inquiries.length})</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-md border border-navy/20 flex-1 min-w-[200px]"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-md border border-navy/20"
        >
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="responded">Responded</option>
          <option value="closed">Closed</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 rounded-md border border-navy/20"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="grid gap-3">
        {filtered.length === 0 && <p className="opacity-60">No inquiries match your search.</p>}
        {filtered.map((inq) => (
          <RecordCard key={inq.id} record={inq} type="inquiry" onUpdateStatus={handleUpdateStatus} />
        ))}
      </div>
    </div>
  );
}