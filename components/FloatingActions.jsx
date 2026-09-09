'use client';

import Link from 'next/link';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end">
      <a
        href="https://wa.me/254720873696"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:-translate-y-1 transition"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.31-1.93 1.35-.49.05-.99.24-3.33-.7-2.82-1.13-4.63-3.99-4.77-4.18-.14-.19-1.14-1.52-1.14-2.9s.72-2.06.98-2.34c.25-.28.55-.35.73-.35h.53c.17 0 .4-.03.62.48.24.56.8 1.94.87 2.08.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.3.36-.42.48-.14.14-.29.29-.13.57.17.28.75 1.24 1.61 2 1.11.99 2.04 1.29 2.32 1.44.28.14.44.12.6-.07.17-.2.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.35z" />
        </svg>
      </a>

      <Link
        href="/request-quote"
        className="hidden sm:inline-flex items-center bg-gold text-navy font-semibold px-5 py-3 rounded-full shadow-lg hover:-translate-y-1 transition"
      >
        Request a Quote
      </Link>
    </div>
  );
}