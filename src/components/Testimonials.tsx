import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    text: "The attention to detail and quality of work were outstanding. Highly professional from start to finish!",
    author: "Jessica R.",
    city: "New York",
  },
  {
    text: "They truly brought my vision to life with such precision and creativity. I couldn't be happier!",
    author: "Michael L.",
    city: "Los Angeles",
  },
  {
    text: "Exceptional craftsmanship and great communication throughout the process. Highly recommended!",
    author: "Sophia R.",
    city: "Chicago",
  },
  {
    text: "The team went above and beyond to ensure perfection. A masterpiece that I will cherish forever!!",
    author: "Noah B.",
    city: "Atlanta",
  },
  {
    text: "Every detail was meticulously crafted. I'm thrilled with the outcome!",
    author: "Ava G.",
    city: "Boston",
  },
];

export default function Testimonials() {
  const testimonialsAnimationTop = {
    x: ["0%", "-100%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    },
  };
  const testimonialsAnimationBottom = {
    x: ["-100%", "-0%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
    },
  };
  return (
    <section className="testimonials">
      <SectionHeading
        subtitle="Client Testimonials"
        heading="What Our Clients Say"
        text="Voices of Satisfaction and Trust"
        subtitleClass="testimonials__subtitle"
        headingClass="testimonials__heading"
        textClass="testimonials__text"
      ></SectionHeading>
      <div className="testimonials-top">
        <motion.div
          animate={testimonialsAnimationTop}
          className="testimonials-content"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              text={testimonial.text}
              author={testimonial.author}
              city={testimonial.city}
            ></TestimonialCard>
          ))}
        </motion.div>{" "}
        <motion.div
          animate={testimonialsAnimationTop}
          className="testimonials-content"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              text={testimonial.text}
              author={testimonial.author}
              city={testimonial.city}
            ></TestimonialCard>
          ))}
        </motion.div>
      </div>
      <div className="testimonials-bottom">
        <motion.div
          animate={testimonialsAnimationBottom}
          className="testimonials-content"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              text={testimonial.text}
              author={testimonial.author}
              city={testimonial.city}
            ></TestimonialCard>
          ))}
        </motion.div>
        <motion.div
          animate={testimonialsAnimationBottom}
          className="testimonials-content"
        >
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              text={testimonial.text}
              author={testimonial.author}
              city={testimonial.city}
            ></TestimonialCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
