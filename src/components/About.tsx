import aboutImage from "../assets/images/about-image.png";
import BackgroundLight from "./BackgroundLight";
import SectionHeading from "./SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(
      [
        ".about-left img",
        ".about-right .about__subtitle",
        ".about-right .about__heading",
        ".about-right .about__text",
      ],
      {
        scrollTrigger: {
          trigger: ".about",
          start: "top+=100 center",
          end: "bottom bottom",
          scrub: 1,
        },
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
      }
    );
  });

  return (
    <>
      <BackgroundLight className="about-background" />
      <section id="about" className="about container">
        <div className="about-left">
          <img src={aboutImage} alt="sculpture" />
        </div>
        <div className="about-right">
          <SectionHeading
            subtitle="About"
            heading="Master Craftsmanship Meets Artistic Vision"
            text="We specialize in bespoke sculptures crafted with precision, passion, and a deep respect for artistic heritage. Whether it's a monumental outdoor piece, a personalized portrait bust, or an abstract art installation, we turn your ideas into timeless works of art."
            subtitleClass="about__subtitle"
            headingClass="about__heading"
            textClass="about__text"
          ></SectionHeading>
        </div>
      </section>
    </>
  );
}
