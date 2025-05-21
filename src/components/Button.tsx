import React from "react";

export default function Button({
  children,
  className,
  href = "#",
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <div className={`button-wrapper ${className ? className : ""}`}>
      <a href={href} className="button-cta">
        {children}
      </a>
    </div>
  );
}
