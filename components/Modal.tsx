"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Photo } from "@/types/photo";

interface ModalProps {
  photo: Photo;
}

export default function Modal({ photo }: ModalProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>
        <Image src={photo.imageUrl} alt={photo.title} width={800} height={600} className="modal-image" priority />
        <div className="modal-info">
          <h2>{photo.title}</h2>
          <p style={{ margin: "0.5rem 0", color: "#666" }}>{photo.description}</p>
          <p style={{ fontSize: "0.9rem", color: "#999" }}>Photographer: {photo.photographer}</p>
        </div>
      </div>
    </div>
  );
}
