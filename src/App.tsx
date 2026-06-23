import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/routes";
import AboutPage from "@/routes/about";
import ContactPage from "@/routes/contact";
import FacilitiesPage from "@/routes/facilities";
import GalleryPage from "@/routes/gallery";
import ServicesPage from "@/routes/services";

const routes: Record<string, React.ComponentType> = {
  "/": Home,
  "/about": AboutPage,
  "/services": ServicesPage,
  "/facilities": FacilitiesPage,
  "/gallery": GalleryPage,
  "/contact": ContactPage,
};

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function getPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

export default function App() {
  const [path, setPath] = useState(getPath);
  const Page = routes[path] ?? NotFound;

  useEffect(() => {
    const onLocationChange = () => {
      setPath(getPath());
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("app:navigate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("app:navigate", onLocationChange);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Page />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-center" />
    </div>
  );
}
