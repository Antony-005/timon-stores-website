'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider } from '@/context/ToastContext';

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('timon_admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setChecking(false);
  }, []);

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center">Checking access...</div>;
  }

  return (
    <ToastProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </ToastProvider>
  );
}