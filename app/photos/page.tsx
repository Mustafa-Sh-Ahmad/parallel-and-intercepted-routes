import { photos } from "@/data/photos";
import PhotoCard from "@/components/PhotoCard";

export default function PhotosPage() {
  return (
    <div className="container">
      <h1 className="page-title">Photo Gallery</h1>
      <p className="page-description">Click on any photo to view it in detail. Notice how photos open in a modal when navigated from this gallery, but show as full pages when accessed directly.</p>

      <div className="grid">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
