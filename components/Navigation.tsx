import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <h1>Photo Gallery</h1>
        <div>
          <Link href="/">Home</Link>
          <Link href="/photos">Photos</Link>
        </div>
      </div>
    </nav>
  );
}
