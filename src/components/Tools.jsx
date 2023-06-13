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

export function HorizontalCheckbox({
  name,
  title,
  description,
  price,
  isYearly,
}) {
  return (
    <div className="horizontal-checkbox">
      <label htmlFor={name}>
        <input type="checkbox" id={name} name={name} />
        <div>
          <h3 className="horizontal-checkbox-title">{title}</h3>
          <p className="horizontal-checkbox-description">{description}</p>
        </div>
        <p className="horizontal-checkbox-price">
          +${!isYearly ? price : price * 10}/{!isYearly ? "mo" : "yr"}
        </p>
      </label>
    </div>
  );
}
