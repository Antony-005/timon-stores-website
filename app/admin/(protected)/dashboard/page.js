'use client';

import { useEffect, useState } from 'react';
import StatCard from '@/components/admin/StatCard';
import TrendChart from '@/components/admin/TrendChart';

export default function AdminOverview() {
  const [inquiries, setInquiries] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('timon_admin_token');
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((r) => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((r) => r.json()),
    ]).then(([inq, msg]) => {
      setInquiries(inq);
      setMessages(msg);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  const allRecords = [...inquiries, ...messages];
  const newCount = allRecords.filter((r) => r.status === 'new').length;
  const respondedCount = allRecords.filter((r) => r.status === 'responded').length;

  return (
    <div>
      <h1 className="mb-6">Overview</h1>
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <StatCard label="New" value={newCount} accent="#D9A441" />
        <StatCard label="Responded" value={respondedCount} accent="#10B981" />
        <StatCard label="Total This Month" value={allRecords.length} accent="#2E2E2E" />
      </div>
      <TrendChart records={allRecords} />
    </div>
  );
}