export interface Pet {
  slug: string;
  name: string;
  species: string;
  age: number;
  breed: string;
  photo: string;
  story: string;
  available: number;
}

export const pets: Pet[] = [
  { slug: "biscuit", name: "Biscuit", species: "Dog", age: 3, breed: "Indian Pariah", photo: "/pets/biscuit.jpg", story: "Loves long walks and sleeps near the front door.", available: 1 },
  { slug: "mango", name: "Mango", species: "Cat", age: 2, breed: "Domestic Shorthair", photo: "/pets/mango.jpg", story: "Calm, friendly and happy with other cats.", available: 0 },
  { slug: "pebble", name: "Pebble", species: "Rabbit", age: 1, breed: "Netherland Dwarf", photo: "/pets/pebble.jpg", story: "Enjoys fresh greens and quiet afternoons.", available: 3 },
  { slug: "sahib", name: "Sahib", species: "Dog", age: 6, breed: "Labrador Mix", photo: "/pets/sahib.jpg", story: "A gentle senior who loves belly rubs.", available: 2 },
  { slug: "chutney", name: "Chutney", species: "Cat", age: 4, breed: "Siamese Mix", photo: "/pets/chutney.jpg", story: "Playful in the mornings and curious about everything.", available: 1 },
];

export function getPet(slug: string): Pet | undefined {
  return pets.find((p) => p.slug === slug);
}

// Local stand-in for an external adoption-count service. Used with a cache setting in Task 5.
export async function getAvailableCount(slug: string): Promise<number> {
  const p = getPet(slug);
  return p ? p.available : 0;
}
