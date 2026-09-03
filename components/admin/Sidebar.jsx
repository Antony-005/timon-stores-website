'use client';

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

  function handleLogout() {
    localStorage.removeItem('timon_admin_token');
    router.push('/admin/login');
  }

  return (
    <aside className="w-56 shrink-0 bg-navy text-white min-h-screen flex flex-col justify-between py-6 px-4">
      <div>
        <h2 className="font-display text-lg mb-8 px-2">Timon Admin</h2>
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
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
  );
}