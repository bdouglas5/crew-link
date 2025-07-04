import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-xl font-bold">Project {id}</h1>
      </main>
    </div>
  );
}
