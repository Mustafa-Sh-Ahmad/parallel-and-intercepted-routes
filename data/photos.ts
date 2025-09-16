import { Photo } from "@/types/photo";

export const photos = [
  {
    id: "1",
    title: "Mountain Landscape",
    description: "Beautiful mountain scenery with snow-capped peaks",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    photographer: "John Doe",
  },
  {
    id: "2",
    title: "Ocean Sunset",
    description: "Stunning sunset over the ocean waves",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    photographer: "Jane Smith",
  },
  {
    id: "3",
    title: "Forest Path",
    description: "Peaceful walking path through a dense forest",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    photographer: "Mike Johnson",
  },
  {
    id: "4",
    title: "City Skyline",
    description: "Modern city skyline at night with bright lights",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    photographer: "Sarah Wilson",
  },
  {
    id: "5",
    title: "Desert Dunes",
    description: "Golden sand dunes stretching to the horizon",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
    photographer: "Alex Brown",
  },
  {
    id: "6",
    title: "Winter Lake",
    description: "Frozen lake surrounded by snow-covered trees",
    imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
    photographer: "Emma Davis",
  },
];

export function getPhotoById(id: string): Photo | undefined {
  return photos.find((photo) => photo.id === id);
}
