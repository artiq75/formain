import { Invoice } from "../Tools";

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

function Summary() {
  return (
    <section>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <Invoice lines={invoiceLines} />
    </section>
  );
}

export default Summary;
