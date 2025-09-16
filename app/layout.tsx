import "./globals.css";
import Navigation from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Parallel & Intercepted Routes",
  description: "Demo of Parallel and Intercepted Routes in Next.js",
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        {modal}
      </body>
    </html>
  );
}
