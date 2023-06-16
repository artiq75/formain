import { forwardRef, useRef } from 'react'

export function Button({ children, ...props }) {
  return <button {...props}>{children}</button>
}

export function TextField({ type = 'text', label, name, error, ...props }) {
  return (
    <p className="textfield">
      <label htmlFor={name}>
        <span>{label}</span>
        {error && <span className="textfield-error">{error}</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        {...props}
        aria-invalid={!!error}
      />
    </p>
  )
}

export function Switch({ name, ...props }) {
  return (
    <label className="switch" htmlFor={name}>
      <input type="checkbox" id={name} name={name} {...props} />
    </label>
  )
}

export function Toggle({ firstLabel, secondLabel, isToggle, onToggle }) {
  const handleToggle = (e) => {
    onToggle(e.target.checked)
  }
  return (
    <div className={`toggle${isToggle ? ' active' : ''}`}>
      <span className="toggle-label" onClick={() => onToggle(false)}>
        {firstLabel}
      </span>
      <Switch checked={isToggle} onChange={handleToggle} />
      <span className="toggle-label" onClick={() => onToggle(true)}>
        {secondLabel}
      </span>
    </div>
  )
}

export function HorizontalCheckbox({
  name,
  value,
  title,
  description,
  price,
  isYearly
}) {
  return (
    <label htmlFor={name} className="horizontal-checkbox">
      <input type="checkbox" id={name} name={name} defaultValue={value} />
      <div>
        <h3 className="horizontal-checkbox-title">{title}</h3>
        <p className="horizontal-checkbox-description">{description}</p>
      </div>
      <p className="horizontal-checkbox-price">
        +${!isYearly ? price : price * 10}/{!isYearly ? 'mo' : 'yr'}
      </p>
    </label>
  )
}
