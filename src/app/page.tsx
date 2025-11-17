import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "./loading";


export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}