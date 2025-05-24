import React from "react";

type InputFormProps = {
  type: string;
  id: string;
  className?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  children: React.ReactNode;
  typeInput?: "input" | "textarea";
  value?: string;
};

export default function InputForm({
  type,
  id,
  className,
  onChange,
  children,
  typeInput = "input",
  value,
}: InputFormProps) {
  if (typeInput === "textarea") {
    return (
      <div className="contact-right__form-group">
        <textarea
          id={id}
          name={id}
          onChange={onChange}
          placeholder=""
          className="contact-right__form-textarea"
          value={value}
        ></textarea>
        <label
          className="contact-right__from-label  contact-right__from-label--textarea"
          htmlFor={id}
        >
          {children}
        </label>
      </div>
    );
  }
  return (
    <div className="contact-right__form-group">
      <input
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        name={id}
        required
        pattern={type === "tel" ? "[0-9]*" : undefined}
        inputMode={type === "tel" ? "numeric" : undefined}
        placeholder=""
        autoComplete="on"
        className={`contact-right__form-input ${className ? className : ""}`}
      />
      <label className="contact-right__from-label" htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
