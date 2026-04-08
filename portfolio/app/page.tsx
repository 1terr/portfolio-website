import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow" />

      <Navbar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", maxWidth: "1100px", margin: "0 auto" }} />
        <About />

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", maxWidth: "1100px", margin: "0 auto" }} />
        <Skills />

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", maxWidth: "1100px", margin: "0 auto" }} />
        <Projects />

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", maxWidth: "1100px", margin: "0 auto" }} />
        <Experience />

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", maxWidth: "1100px", margin: "0 auto" }} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
