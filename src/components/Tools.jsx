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

export function Switch({ name, ...props }) {
  return (
    <label className="switch" htmlFor={name}>
      <input type="checkbox" id={name} name={name} {...props} />
    </label>
  );
}

export function Toggle({ firstLabel, secondLabel, isToggle, onToggle }) {
  return (
    <div className={`toggle${isToggle ? " active" : ""}`}>
      <span className="toggle-label">{firstLabel}</span>
      <Switch onChange={onToggle} />
      <span className="toggle-label">{secondLabel}</span>
    </div>
  );
}
