import contactImage from "../assets/images/contact-image.png";
import BackgroundWave from "./BackgroundWave";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <>
      <BackgroundWave className="contact__wave"></BackgroundWave>
      <section id="contact" className="contact container">
        <SectionHeading
          subtitle="Contact"
          heading="Get in Touch with Us"
          text="Let’s Create Something Extraordinary Together"
          headingClass="contact__heading"
          textClass="contact__text"
        ></SectionHeading>
        <div className="contact-content">
          <div className="contact-left">
            <img
              className="contact-left__image"
              src={contactImage}
              alt="Sculpture"
            />
          </div>
          <div className="contact-right">
            <form className="contact-right__form">
              <div className="contact-right__form-group">
                <input
                  type="text"
                  id="name"
                  placeholder=""
                  className="contact-right__form-input"
                />
                <label className="contact-right__from-label" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="contact-right__form-group">
                <input
                  type="email"
                  id="email"
                  placeholder=""
                  className="contact-right__form-input"
                />
                <label className="contact-right__from-label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="contact-right__form-group">
                <input
                  type="tel"
                  id="phone"
                  placeholder=""
                  className="contact-right__form-input"
                />
                <label className="contact-right__from-label" htmlFor="phone">
                  Phone Number
                </label>
              </div>
              <div className="contact-right__form-group">
                <textarea
                  id="message"
                  placeholder=""
                  className="contact-right__form-textarea"
                ></textarea>
                <label
                  className="contact-right__from-label  contact-right__from-label--textarea"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>
              <button type="submit" className="contact-right__form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
