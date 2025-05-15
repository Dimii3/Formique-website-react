type SectionHeadingProps = {
  subtitle: string;
  heading: string;
  text: string;
  subtitleClass?: string;
  headingClass?: string;
  textClass?: string;
};

export default function SectionHeading({
  subtitle,
  heading,
  text,
  subtitleClass,
  headingClass,
  textClass,
}: SectionHeadingProps) {
  return (
    <>
      <span className={`subtitle ${subtitleClass ? subtitleClass : ""}`}>
        {subtitle}
      </span>
      <h2 className={`section-heading ${headingClass ? headingClass : ""}`}>
        {heading}
      </h2>
      <p className={`text ${textClass ? textClass : ""}`}>{text}</p>
    </>
  );
}
