import { pets } from "@/lib/pets";

// TODO (Task 4b): export the route setting named revalidate with the value 3600, so this page's data refreshes at most once an hour.

export default function AdoptionsPage() {
  return (
    <div>
      <h1>Adoptions</h1>
      <ul>
        {pets.map((p) => (
          <li key={p.slug}>{p.name} ({p.species})</li>
        ))}
      </ul>
    </div>
  );
}
