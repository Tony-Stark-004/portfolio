import Navbar    from "@/components/Navbar";
import Hero       from "@/components/Hero";
import About      from "@/components/About";
import Experience from "@/components/Experience";
import Projects   from "@/components/projects/Projects";
import Skills     from "@/components/Skills";
import Education  from "@/components/Education";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>

      <Footer />
    </>
  );
}
