import { Children } from "react";

export function Stepper({ step, children }) {
  return (
    <ul className="stepper" role="stepper">
      {Children.map(children, (child, i) => (
        <li role="step" className="step" aria-current={i + 1 !== step}>
          {child}
        </li>
      ))}
    </ul>
  );
}

export function Step({ children }) {
  return <>{children}</>;
}
