import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FeaturedCollections from "@/components/collections/FeaturedCollections";
import About from "@/components/about/About";
import Products from "@/components/products/Products";
import Testimonials from "@/components/testimonials/Testimonials";
import Instagram from "@/components/instagram/Instagram";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/TempFooter";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <FeaturedCollections />
        <About />
        <Products />
        <Testimonials />
        <Instagram />
        <CTA />
      </main>

      <Footer />
    </>
  );
}