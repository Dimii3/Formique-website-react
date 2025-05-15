export default function BackgroundLight({ className }: { className?: string }) {
  return (
    <div className={`background-light ${className ? className : ""}`}></div>
  );
}
