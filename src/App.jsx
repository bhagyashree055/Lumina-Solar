import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Whysolar from "./Whysolar/Whysolar";
import Contact from "./Contact/Contact";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
<main>
      <Home />
      <Hero/>
      <Stats/>
      <About />
      <Services />
      <Projects />
      <Whysolar />
      <Process/>
      <Testimonials/>
      <Contact />
</main>
      <Footer />
    </>
  );
}

export default App;