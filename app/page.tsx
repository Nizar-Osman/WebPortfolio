import Image from "next/image";
import Header from "./components/Header";
import About from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <Header />
        <main>
          <img className="hero-img" src="https://picsum.photos/200/300" />
          <h1 className="hero-title"> Express Your Brand Through Prestige & Function</h1>
          <p className="hero-p">We Specialize In Custom interactive application development. SAAS integration that will set you apart from the competition.
          </p>
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
