import Blog from "@/components/shared/Blog";
import BrandCarousel from "@/components/shared/BrandCarousel";
import Contact from "@/components/shared/Contact";
import CTA from "@/components/shared/CTA";
import Hero from "@/components/shared/Hero";
import Services from "@/components/shared/Services";
import Why from "@/components/shared/Why";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandCarousel />
      <Why />
      <Services />
      <Blog />
      <CTA />
      <Contact />
    </div>
  );
}
