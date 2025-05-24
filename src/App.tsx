import headerImage from "../src/assets/images/header-image.png";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Nav from "./components/Nav";
import Process from "./components/Process";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Lenis from "lenis";

export default function App() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);

  // SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = headerImage;
    img.onload = () => setIsHeaderLoaded(true);
  }, []);

  return (
    <>
      <Nav />
      <Header
        imageHeader={headerImage}
        onImageLoaded={() => setIsHeaderLoaded(true)}
        isImageLoaded={isHeaderLoaded}
      />
      <Logos />
      <About />
      <Products />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      {!isHeaderLoaded && (
        <div className={`header-preloader ${isHeaderLoaded ? "loaded" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </>
  );
}
