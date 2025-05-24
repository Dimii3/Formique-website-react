import BackgroundLight from "./BackgroundLight";
import BackgroundWave from "./BackgroundWave";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Header({
  imageHeader,
  onImageLoaded,
  isImageLoaded,
}: {
  imageHeader: string;
  onImageLoaded: () => void;
  isImageLoaded: boolean;
}) {
  useGSAP(
    () => {
      if (!isImageLoaded) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(
        [".header-left__heading", ".header-left__text", ".header-left__cta"],
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
          stagger: 0.1,
        }
      );

      gsap.from(".header-left__subtitles span", {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.3,
        duration: 0.6,
        delay: 0.6,
      });

      gsap.from(".header-right img", {
        filter: "blur(10px)",
        duration: 2,
      });

      gsap.to(".header-left", {
        scrollTrigger: {
          trigger: ".header-left",
          start: "center 50%",
          end: "bottom 20%",
          scrub: 1,
          once: true,
        },
        y: -50,
        duration: 2,
      });
    },
    { dependencies: [isImageLoaded] }
  );

  return (
    <>
      <BackgroundLight className="header-background" />
      <BackgroundWave className="header-background__wave" />
      <header className="header header-container">
        <div className="header-left">
          <div className="header-left__subtitles">
            <span>
              Expression <div className="circle"></div>
            </span>
            <span>
              Ethereal <div className="circle"></div>
            </span>
            <span>
              Elegance <div className="circle"></div>
            </span>
          </div>
          <h1 className="header-left__heading">
            Custom Sculptures <span>Handcrafted</span> to Inspire
          </h1>
          <p className="header-left__text">
            Bring your vision to life with one-of-a-kind sculptures tailored to
            your imagination, style, and space.
          </p>
          <Button href="#process" className="header-left__cta">
            Shape Your Vision
          </Button>
        </div>
        <div className="header-right">
          <img
            src={imageHeader}
            alt="sculpture of a man"
            fetchPriority="high"
            onLoad={onImageLoaded}
          />
        </div>
      </header>
    </>
  );
}
