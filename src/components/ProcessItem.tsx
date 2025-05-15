export default function ProcessItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="process-item-wrapper">
      <div className="process-item">
        <span className="process-item__number">{number}</span>
        <h3 className="process-item__title">{title}</h3>
        <p className="process-item__text">{text}</p>
      </div>
    </div>
  );
}
