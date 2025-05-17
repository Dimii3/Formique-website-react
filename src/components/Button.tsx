import React from "react";

export default function Button({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`button-wrapper ${className ? className : ""}`}>
      <button className="button-cta" data-content={children}>
        {children}
      </button>
    </div>
  );
}
