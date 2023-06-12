import { useState } from "react";
import { Tile } from "../Tile";
import { Switch } from "../Tools";

function Plan() {
  const [isYearly, setIsYearly] = useState(false);

  const handleChange = (e) => {
    setIsYearly(e.target.checked);
  };

  return (
    <section className="plan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <form>
        <Tile
          name="plan"
          icon="arcade"
          title="Arcade"
          price={9}
          isYearly={isYearly}
        />
        <Tile
          name="plan"
          icon="advanced"
          title="Advanced"
          price={12}
          isYearly={isYearly}
        />
        <Tile
          name="plan"
          icon="pro"
          title="Pro"
          price={15}
          isYearly={isYearly}
        />
      </form>
      <Switch onChange={handleChange} />
    </section>
  );
}

export default Plan;
