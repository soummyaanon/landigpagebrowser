import { HeroSection } from "@/components/blocks/hero-section-dark";
import { NavbarDemo } from "@/components/blocks/navbar-demo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavbarDemo />
      <div>
        <HeroSection
          title="Welcome to Our Platform" 
          subtitle={{
            regular: "Navigate healthcare with ",
            gradient: "intelligence and precision",
          }}
          description="Experience a revolutionary approach to healthcare information with our AI-powered browser designed specifically for medical professionals and patients."
          ctaText="Get Started"
          ctaHref="/signup"
          bottomImage={{
            light: "https://www.launchuicomponents.com/app-light.png",
            dark: "https://www.launchuicomponents.com/app-dark.png",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
      </div>
    </main>
  );
}
