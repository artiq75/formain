import { useMemo } from "react";

function Invoice({ lines, isYearly }) {
  const total = useMemo(() => {
    return lines.reduce((acc, line) => acc + line.price, 0);
  }, [lines]);

  return (
    <table className="invoice">
      <thead>
        <tr>
          <th>
            {lines[0].description} (Monthly) <br /> <a href="">change</a>
          </th>
          <th>
            ${!isYearly ? lines[0].price : lines[0].price * 10}/
            {!isYearly ? "mo" : "yr"}
          </th>
        </tr>
      </thead>
      <tbody>
        {lines.map((line, i) => (
          <>
            {i >= 1 && (
              <tr>
                <td>{line.description}</td>
                <td>
                  +${!isYearly ? line.price : line.price * 10}/
                  {!isYearly ? "mo" : "yr"}
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total (per {!isYearly ? "month" : "year"})</td>
          <td className="invoice-total">
            +${!isYearly ? total : total * 10}/{!isYearly ? "mo" : "yr"}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Invoice;
