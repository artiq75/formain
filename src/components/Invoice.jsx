import { useMemo } from 'react'

function Invoice({ data, isYearly }) {
  const total = useMemo(() => {
    return [data.plan, ...data.addons].reduce(
      (acc, line) => acc + line.price,
      0
    )
  }, [data])

  return (
    <table className="invoice">
      <thead>
        <tr>
          <th>
            {data.plan.title} (Monthly) <br /> <a href="">change</a>
          </th>
          <th>
            ${!isYearly ? data.plan.price : data.plan.price * 10}/
            {!isYearly ? 'mo' : 'yr'}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.addons.map((addon, i) => (
          <tr key={i}>
            <td>{addon.title}</td>
            <td>
              +${!isYearly ? addon.price : addon.price * 10}/
              {!isYearly ? 'mo' : 'yr'}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total (per {!isYearly ? 'month' : 'year'})</td>
          <td className="invoice-total">
            +${!isYearly ? total : total * 10}/{!isYearly ? 'mo' : 'yr'}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Invoice
