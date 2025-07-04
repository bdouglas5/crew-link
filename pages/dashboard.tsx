import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/login');
    });
    return () => unsub();
  }, [router]);

  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </main>
    </div>
  );
}
