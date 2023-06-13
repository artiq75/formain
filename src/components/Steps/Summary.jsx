import Invoice from "../Invoice";

const invoiceLines = [
  {
    description: "Arcade",
    price: 9,
  },
  {
    description: "Online service",
    price: 1,
  },
  {
    description: "Larger storage",
    price: 2,
  },
];

function Summary({ isYearly }) {
  return (
    <section className="summary">
      <div className="summary-header">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <Invoice lines={invoiceLines} isYearly={isYearly} />
    </section>
  );
}

export default Summary;
