import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "PetPal",
  description: "Find a pet in the PetPal shelter.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <span className="brand">PetPal</span>
          <nav className="links">
            <Link href="/">Pets</Link>
            <Link href="/adoptions">Adoptions</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
