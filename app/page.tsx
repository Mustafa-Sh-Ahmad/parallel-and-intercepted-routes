import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="page-title">Next.js Parallel & Intercepted Routes Demo</h1>
      <p className="page-description">This project demonstrates the powerful routing features in Next.js 13+. Navigate to the photos page to see intercepted routes in action - photos will open in a modal when navigated to from the gallery, but as full pages when accessed directly.</p>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link
          href="/photos"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            background: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            transition: "background 0.2s ease",
          }}
        >
          View Photo Gallery
        </Link>
      </div>

      <div style={{ marginTop: "4rem", padding: "2rem", background: "white", borderRadius: "12px" }}>
        <h2 style={{ marginBottom: "1rem", color: "#333" }}>How it works:</h2>
        <ul style={{ lineHeight: "1.6", color: "#666" }}>
          <li>
            <strong>Parallel Routes:</strong> The modal slot (@modal) runs in parallel with the main page content
          </li>
          <li>
            <strong>Intercepted Routes:</strong> Routes starting with (.) intercept navigation from the same level
          </li>
          <li>
            <strong>Modal Experience:</strong> Clicking photos in the gallery opens them in a modal overlay
          </li>
          <li>
            <strong>Direct Access:</strong> Navigating directly to /photos/[id] shows the full page view
          </li>
          <li>
            <strong>Browser History:</strong> Both approaches maintain proper browser history and URL updates
          </li>
        </ul>
      </div>
    </div>
  );
}
