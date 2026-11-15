import { pets } from "@/lib/pets";

// TODO (Task 4c): export the route setting named dynamic with the value "force-dynamic", so this page is rendered fresh on every request.

export default function InventoryPage() {
  return (
    <div>
      <h1>Available now</h1>
      <ul>
        {pets.map((p) => (
          <li key={p.slug}>{p.name}: {p.available} available</li>
        ))}
      </ul>
    </div>
  );
}
