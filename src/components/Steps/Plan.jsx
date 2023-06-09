import { Tile } from "../Tools";

function Plan() {
  return (
    <section>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <Tile icon="" title="Arcade" price={9} />
      <Tile icon="" title="Advanced" price={12} />
      <Tile icon="" title="Pro" price={15} />
    </section>
  );
}

export default Plan;
