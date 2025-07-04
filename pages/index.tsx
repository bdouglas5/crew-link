import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => (
  <div className="min-h-screen p-8">
    <Head>
      <title>Crewlink</title>
    </Head>
    <h1 className="text-2xl font-bold mb-4">Welcome to Crewlink</h1>
    <Link href="/signup" className="text-blue-500 underline">
      Get Started
    </Link>
  </div>
);

export default Home;
