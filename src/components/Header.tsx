import BackgroundLight from "./BackgroundLight";
import BackgroundWave from "./BackgroundWave";

export default function Header() {
  return (
    <>
      <BackgroundLight className="header-background"></BackgroundLight>
      <BackgroundWave className="header-background__wave"></BackgroundWave>
      <header className="header container">
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
            Custom Sculptures
            <br />
            <span>Handcrafted</span> to Inspire
          </h1>
          <p className="header-left__text">
            Bring your vision to life with one-of-a-kind sculptures tailored to
            your imagination, style, and space.
          </p>
          <a href="#" className="header-left__cta">
            Explore it
          </a>
        </div>
        <div className="header-right">
          <img src="/header-image.png" alt="sculpture of a man" />
        </div>
      </header>
    </>
  );
}
