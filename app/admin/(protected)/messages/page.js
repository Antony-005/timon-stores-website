'use client';

import { useEffect, useState } from 'react';
import RecordCard from '@/components/admin/RecordCard';
import { useToast } from '@/context/ToastContext';

export default function AdminMessages() {
  const { showToast } = useToast();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const token = localStorage.getItem('timon_admin_token');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages(await res.json());
    setLoading(false);
  }

  async function handleUpdateStatus(type, id, status) {
    const token = localStorage.getItem('timon_admin_token');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      showToast(`Marked as ${status}`);
      fetchMessages();
    } catch {
      showToast('Could not update status', 'error');
    }
  }

  let filtered = messages.filter((msg) => {
    const matchesSearch =
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || msg.status === statusFilter;
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
      <h1 className="mb-6">Messages ({messages.length})</h1>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
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
        {filtered.length === 0 && <p className="opacity-60">No messages match your search.</p>}
        {filtered.map((msg) => (
          <RecordCard key={msg.id} record={msg} type="message" onUpdateStatus={handleUpdateStatus} />
        ))}
      </div>
    </div>
  );
}