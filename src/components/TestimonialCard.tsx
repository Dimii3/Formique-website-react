export default function TestimonialCard({
  text,
  author,
  city,
}: {
  text: string;
  author: string;
  city: string;
}) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card__text text">{text}</p>
      <hr />
      <div className="testimonial-card-bottom">
        <p className="testimonial-card__author">
          <div className="square"></div>
          {author}
        </p>
        <p className="testimonial-card__city">{city}</p>
      </div>
    </div>
  );
}
