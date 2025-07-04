import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex space-x-4">
      <Link href="/" className="font-semibold">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/projects/new">New Project</Link>
    </nav>
  );
}
