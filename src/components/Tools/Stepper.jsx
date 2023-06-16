import { Children, useCallback } from 'react'

export function Stepper({ step, children, onClick }) {
  const handleClick = (step) => {
    if (onClick) {
      onClick(step)
    }
  }

  return (
    <ul className="stepper" role="stepper">
      {Children.map(children, (child, i) => (
        <li
          role="step"
          className="step"
          aria-current={i + 1 !== step}
          onClick={() => handleClick(i + 1)}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export function Step({ children }) {
  return <>{children}</>
}
