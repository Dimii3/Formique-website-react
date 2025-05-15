export default function BackgroundWave({ className }: { className: string }) {
  return (
    <div className={`background-wave ${className ? className : ""}`}></div>
  );
}
