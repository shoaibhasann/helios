import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import Footer from "@/components/Footer";
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Header />
      <Hero />
      <CategoryShowcase />
      <Collections />
      <Footer />
    </main>
  );
}
