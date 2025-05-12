import { HeroSection } from "@/components/blocks/hero-section-dark";
import { NavbarDemo } from "@/components/blocks/navbar-demo";


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
            light: "/Helo1.png",
            dark: "/Helo.png",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#FF9800",
            darkLineColor: "#FF6D00",
          }}
        />
      </div>
    </main>
  );
}
