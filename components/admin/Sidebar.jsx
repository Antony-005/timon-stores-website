'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [
  { href: '/admin/dashboard', label: 'Overview' },
  { href: '/admin/inquiries', label: 'Inquiries' },
  { href: '/admin/messages', label: 'Messages' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem('timon_admin_token');
    router.push('/admin/login');
  }

  function handleNavClick() {
    setOpen(false);
  }

  return (
    <>
      <div className="lg:hidden sticky top-0 z-40 bg-navy text-white flex items-center justify-between px-4 py-3">
        <h2 className="font-display text-lg">Timon Admin</h2>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-2xl leading-none px-2"
        >
          {open ? '\u2715' : '\u2630'}
        </button>
      </div>

      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 z-30"
        />
      )}

      <aside
        className={`
          bg-navy text-white flex flex-col justify-between py-6 px-4
          fixed lg:sticky top-0 left-0 h-screen z-40
          w-64 lg:w-56 shrink-0
          transition-transform duration-200
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div>
          <h2 className="font-display text-lg mb-8 px-2 hidden lg:block">Timon Admin</h2>
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`px-3 py-2 rounded-md transition ${
                  pathname === link.href ? 'bg-gold text-navy font-semibold' : 'hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="text-left px-3 py-2 rounded-md hover:bg-rust/80 transition"
        >
          Log Out
        </button>
      </aside>
    </>
  );
}