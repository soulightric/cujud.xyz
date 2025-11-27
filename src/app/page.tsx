import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "./loading";
import MatrixWorms from "@/components/MatrixWorms";
import MatrixRain from "@/components/MatrixRain";

export const revalidate = 60;

export default async function Home() {
  return (
    <main className="min-h-screen relative">
      {/* <LoadingScreen /> */}
      <MatrixRain />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

