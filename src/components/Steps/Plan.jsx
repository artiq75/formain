import { Tile } from "../Tile";

function Plan() {
  return (
    <section className="plan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <form>
        <Tile name="plan" icon="arcade" title="Arcade" price={9} />
        <Tile name="plan" icon="advanced" title="Advanced" price={12} />
        <Tile name="plan" icon="pro" title="Pro" price={15} />
      </form>
    </section>
  );
}

export default Plan;
