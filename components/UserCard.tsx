interface Props {
  name: string;
  skills: string[];
  avatarUrl?: string;
}

export default function UserCard({ name, skills, avatarUrl }: Props) {
  return (
    <div className="border p-4 rounded flex items-center space-x-4">
      {avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full" />
      ) : (
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
      )}
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{skills.join(', ')}</p>
      </div>
    </div>
  );
}
