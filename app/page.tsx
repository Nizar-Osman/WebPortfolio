import Image from "next/image";
import Header from "./components/header";
import About from "./components/aboutme";

export default function Home() {
  return (
    <>
      <Header />
        <main>
          <img className="hero-img" src="https://picsum.photos/200/300" />
          <h1 className="hero-title"> Aspiring React Developer</h1>
          <p className="hero-p"> Specializing In Frontend Creativity & -InteREACTivity</p>
        </main>
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
