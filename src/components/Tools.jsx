import { useMemo } from "react";

export function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function TextField({ type = "text", label, name, ...props }) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} name={name} {...props} />
    </p>
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

export function HorizontalTile() {
  const id = useMemo(() => crypto.randomUUID(), []);
  return (
    <div className="horizont-tile">
      <label htmlFor={id}></label>
      <input type="checkbox" id={id} name={id} />
    </div>
  );
}

export function Invoice({ lines }) {
  return (
    <table className="invoice">
      <tbody>
        {lines.map((line, i) => (
          <tr key={i}>
            <td>{line.description}</td>
            <td>{line.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
