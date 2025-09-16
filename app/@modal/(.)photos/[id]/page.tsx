import { getPhotoById } from "@/data/photos";
import Modal from "@/components/Modal";
import { notFound } from "next/navigation";

interface InterceptedPhotoModalProps {
  params: {
    id: string;
  };
}

export default async function InterceptedPhotoModal({ params }: InterceptedPhotoModalProps) {
  const { id } = await params;
  const photo = getPhotoById(id);

  if (!photo) {
    notFound();
  }

  return <Modal photo={photo} />;
}
