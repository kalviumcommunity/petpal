import Link from "next/link";
import { Pet } from "@/lib/pets";

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <div className="card">
      <div className="photo">
        {/* TODO (Task 3a): replace this <img> with the Image component from next/image. Use fill and sizes "(max-width: 600px) 100vw, 33vw". */}
        <img src={pet.photo} alt={pet.name} />
      </div>
      <div className="card-body">
        <h3>{pet.name}</h3>
        <p className="meta">{pet.species} · {pet.age} years</p>
        <p><Link href={"/pets/" + pet.slug}>Meet {pet.name}</Link></p>
      </div>
    </div>
  );
}
