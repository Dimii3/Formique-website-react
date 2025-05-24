import { useState } from "react";
import contactImage from "../assets/images/contact-image.png";
import BackgroundWave from "./BackgroundWave";
import SectionHeading from "./SectionHeading";
import InputForm from "./InputForm";

const Inputs: {
  type: string;
  id: keyof FormData;
  label: string;
  typeInput: "input" | "textarea";
}[] = [
  {
    type: "text",
    id: "name",
    label: "Name",
    typeInput: "input",
  },
  {
    type: "email",
    id: "email",
    label: "Email",
    typeInput: "input",
  },
  {
    type: "tel",
    id: "phone",
    label: "Phone Number",
    typeInput: "input",
  },
  {
    type: "textarea",
    id: "message",
    label: "Message",
    typeInput: "textarea",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    const inputID = e.target.name;
    if (inputID === "phone") {
      value = value.replace(/\D/g, "");
    }
    setData((prevData) => ({
      ...prevData,
      [inputID]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", data);
    setData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="contact container">
        <BackgroundWave className="contact__wave"></BackgroundWave>
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
            <form onSubmit={handleSubmit} className="contact-right__form">
              {Inputs.map((input) => (
                <InputForm
                  key={input.id}
                  id={input.id}
                  type={input.type}
                  typeInput={input.typeInput}
                  onChange={handleChange}
                  value={data[input.id]}
                >
                  {input.label}
                </InputForm>
              ))}
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
