import PageMotion from "@/components/PageMotion";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TattooShowcase from "@/components/TattooShowcase";

export default function HomePage() {
  return (
    <PageMotion>
      <Header />
      <main>
        <Hero />
        <TattooShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </PageMotion>
  );
}
