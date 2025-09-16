import { getPhotoById } from "@/data/photos";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;

  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

  return (
    <div className="container">
      <Link
        href="/photos"
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          color: "#007bff",
          textDecoration: "none",
        }}
      >
        ← Back to Gallery
      </Link>

      <div
        style={{
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image src={photo.imageUrl} alt={photo.title} width={800} height={600} style={{ width: "100%", height: "auto", display: "block" }} priority />
        <div style={{ padding: "2rem" }}>
          <h1 style={{ marginBottom: "1rem", color: "#333" }}>{photo.title}</h1>
          <p style={{ marginBottom: "1rem", color: "#666", lineHeight: "1.6" }}>{photo.description}</p>
          <p style={{ color: "#999", fontSize: "0.9rem" }}>Photographer: {photo.photographer}</p>
        </div>
      </div>
    </div>
  );
}
