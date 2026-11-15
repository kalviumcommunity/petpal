import Link from "next/link";
import { pets } from "@/lib/pets";

export default function HomePage() {
  return (
    <div>
      <h1>Pets</h1>
      <p className="meta">{pets.length} pets in the shelter.</p>
      <div className="grid">
        {pets.map((p) => (
          <div key={p.slug} className="card">
            <div className="card-body">
              <h3>{p.name}</h3>
              <p className="meta">{p.species} · {p.age} years</p>
              <p><Link href={"/pets/" + p.slug}>Meet {p.name}</Link></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
