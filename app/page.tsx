import Image from "next/image";
import Navbar from "./components/NavBar";
import About from "./components/AboutMe";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      <section> 
        Porfolio Section!


      </section>

      <section>
        <h2>Resume</h2>
        <p> Download my resume here!</p>
      </section>
    </>
  );
}
