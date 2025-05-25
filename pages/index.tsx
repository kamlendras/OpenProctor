// pages/index.js
"use client"
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    } else {
      router.push('/dashboard');
    }
  }, [currentUser, router]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Loading...</h1>
      </div>
    </div>
  );
}