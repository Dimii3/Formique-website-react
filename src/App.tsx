import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Process from "./components/Process";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
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
