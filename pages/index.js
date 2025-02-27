import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ResumeSection from "@/components/ResumeSection";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <>
     <Header />
     <Hero  id="hero" />
     <Projects  id="projects"/>
     <Skills  id="skills"  />
     <ResumeSection  id="education"  />
     <Contact id="contact"  />
    </>
  );
}
