import { useEffect } from "react";
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
  // SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Logos></Logos>
      <About></About>
      <Products></Products>
      <Process></Process>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
