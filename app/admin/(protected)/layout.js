'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import { ToastProvider } from '@/context/ToastContext';

const INACTIVITY_LIMIT_MS = 3 * 60 * 1000; // 3 minutes
const ACTIVITY_EVENTS = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const timerRef = useRef(null);

  const logout = useCallback((reason) => {
    localStorage.removeItem('timon_admin_token');
    if (reason) {
      sessionStorage.setItem('timon_admin_logout_reason', reason);
    }
    router.push('/admin/login');
  }, [router]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      logout('inactivity');
    }, INACTIVITY_LIMIT_MS);
  }, [logout]);

  useEffect(() => {
    const token = localStorage.getItem('timon_admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setChecking(false);
  }, [router]);

  useEffect(() => {
    if (checking) return;

    resetTimer();
    ACTIVITY_EVENTS.forEach((event) => window.addEventListener(event, resetTimer));

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [checking, resetTimer]);

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