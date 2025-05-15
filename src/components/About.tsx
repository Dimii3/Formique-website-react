import BackgroundLight from "./BackgroundLight";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <>
      <BackgroundLight className="about-background" />
      <section className="about container">
        <div className="about-left">
          <img src="/about-image.png" alt="sculpture" />
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
