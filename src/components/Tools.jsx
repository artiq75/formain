import { useMemo } from "react";

export function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function TextField({ type = "text", label, name, ...props }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} {...props} />
    </>
  );
}

export function Tile() {
  const id = useMemo(() => crypto.randomUUID(), []);
  return (
    <div className="tile">
      <label htmlFor={id}></label>
      <input type="checkbox" id={id} name={id} />
    </div>
  );
}
