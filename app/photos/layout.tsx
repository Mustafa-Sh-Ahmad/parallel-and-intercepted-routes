interface PhotosLayoutProps {
  children: React.ReactNode;
}

export default function PhotosLayout({ children }: PhotosLayoutProps) {
  return <div>{children}</div>;
}
