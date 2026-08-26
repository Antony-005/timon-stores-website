'use client';

import { useEffect, useRef, useState } from 'react';

export default function RouteLine() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`h-[3px] bg-gold transition-all duration-1000 ${
        inView ? 'w-full' : 'w-0'
      }`}
    />
  );
}