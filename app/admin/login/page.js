'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed.');
        return;
      }

      localStorage.setItem('timon_admin_token', data.token);
      router.push('/admin/dashboard');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-navy px-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 w-full max-w-sm grid gap-4">
        <h1 className="text-2xl">Admin Login</h1>
        <div>
          <label className="font-mono text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20"
            required
          />
        </div>
        <div>
          <label className="font-mono text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-4 py-3 rounded-md border border-navy/20"
            required
          />
        </div>
        {error && <p className="text-rust text-sm">{error}</p>}
        <button type="submit" className="bg-gold text-navy font-semibold py-3 rounded-md hover:-translate-y-0.5 transition">
          Log In
        </button>
      </form>
    </section>
  );
}