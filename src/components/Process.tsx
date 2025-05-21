import SectionHeading from "./SectionHeading";
import ProcessItem from "./ProcessItem";

const processItems = [
  {
    number: "001",
    title: "Consultation & Concept",
    text: "We listen to your ideas and discuss possibilities.",
  },
  {
    number: "002",
    title: "Design & Sketching",
    text: "Our artists create sketches or 3D previews.",
  },
  {
    number: "003",
    title: "Sculpting & Detailing",
    text: "Handmade with traditional techniques or modern tools.",
  },
  {
    number: "004",
    title: "Finishing & Delivery",
    text: "Patinas, polishing, installation options available.",
  },
];

export default function Process() {
  return (
    <section id="process" className="process container">
      <SectionHeading
        subtitle="Our Process"
        heading="From Concept to Completion"
        text="Crafting Masterpieces Through Every Step"
        subtitleClass="process__subtitle"
        headingClass="process__heading"
        textClass="process__text"
      ></SectionHeading>
      <div className="process-content">
        {processItems.map((item) => (
          <ProcessItem
            key={item.number}
            number={item.number}
            title={item.title}
            text={item.text}
          ></ProcessItem>
        ))}
      </div>
    </section>
  );
}
