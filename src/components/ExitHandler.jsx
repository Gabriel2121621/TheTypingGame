'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ExitHandler() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') router.push('../');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return null;
}