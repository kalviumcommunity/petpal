import { getPet } from "@/lib/pets";
import dynamic from "next/dynamic";

// TODO (Task 1): export generateStaticParams that returns one { id } for every pet (use the pet's slug as the id).
// TODO (Task 1): if getPet(params.id) finds nothing, call notFound() (import it from "next/navigation").
// TODO (Task 3b): load components/Reviews.tsx with next/dynamic (ssr: false, loading shows "Loading reviews...").
// TODO (Task 4a): export generateMetadata that returns a title and an openGraph block, both using the pet name.

export default function PetPage({ params }: { params: { id: string } }) {
  const pet = getPet(params.id);
  return (
    <div>
      <h1>{pet?.name}</h1>
      <p className="meta">{pet?.species} · {pet?.breed} · {pet?.age} years</p>
      <p>{pet?.story}</p>
    </div>
  );
}
