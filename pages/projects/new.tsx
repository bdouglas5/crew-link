import ProjectForm from '../../components/ProjectForm';
import Navbar from '../../components/Navbar';

export default function NewProject() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-xl font-bold mb-4">New Project</h1>
        <ProjectForm />
      </main>
    </div>
  );
}
