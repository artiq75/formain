import { useMemo } from "react";

export function Tile({ name, icon, title, price, isYearly = false }) {
  const id = useMemo(() => crypto.randomUUID(), []);
  return (
    <div className="tile">
      <label htmlFor={id}>
        <img
          src={`/assets/images/icon-${icon}.svg`}
          alt={title}
          className="tile-icon"
        />
        <div>
          <h3 className="tile-title">{title}</h3>
          <p className="tile-price">
            ${price}/{!isYearly ? "mo" : "yr"}
          </p>
          {isYearly && (
            <p className="tile-bonus">
              <strong>2 months free</strong>
            </p>
          )}
        </div>
      </label>
      <input type="radio" id={id} name={name} />
    </div>
  );
}

export function HorizontalCheckbox({ name }) {
  return (
    <div className="horizont-checkbox">
      <label htmlFor={name}></label>
      <input type="checkbox" id={name} name={name} />
    </div>
  );
}
