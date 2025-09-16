import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/photo";

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Link href={`/photos/${photo.id}`} className="card">
      <Image src={photo.imageUrl} alt={photo.title} width={300} height={200} priority />
      <div className="card-content">
        <h3>{photo.title}</h3>
        <p>{photo.description}</p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "#999" }}>By {photo.photographer}</p>
      </div>
    </Link>
  );
}
