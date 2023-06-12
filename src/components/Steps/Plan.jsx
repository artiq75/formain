import { useState } from "react";
import { Tile } from "../Tile";
import { Toggle } from "../Tools";

function Plan({ isYearly, onToggle }) {
  return (
    <section className="plan">
      <div className="plan-header">
        <h1 className="plan-title">Select your plan</h1>
        <p className="plan-description">
          You have the option of monthly or yearly billing.
        </p>
      </div>
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
      <Toggle
        firstLabel="Monthly"
        secondLabel="Yearly"
        isToggle={isYearly}
        onToggle={onToggle}
      />
    </section>
  );
}

export default Plan;
