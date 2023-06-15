import { useMemo } from 'react'

export function Tile({ name, value, icon, title, price, isYearly = false }) {
  const id = useMemo(() => crypto.randomUUID(), [])
  return (
    <label htmlFor={id} className="tile">
      <img
        src={`/assets/images/icon-${icon}.svg`}
        alt={title}
        className="tile-icon"
      />
      <div>
        <h3 className="tile-title">{title}</h3>
        <p className="tile-price">
          ${!isYearly ? price : price * 10}/{!isYearly ? 'mo' : 'yr'}
        </p>
        {isYearly && (
          <p className="tile-bonus">
            <strong>2 months free</strong>
          </p>
        )}
      </div>
      <input type="radio" id={id} name={name} defaultValue={value} />
    </label>
  )
}
