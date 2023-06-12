import { HorizontalCheckbox } from "../Tools";

function Addons({ isYearly }) {
  return (
    <section className="addons">
      <div className="addons-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="addons-list">
        <HorizontalCheckbox
          title="Online service"
          description="Access to multiplayer games"
          price={1}
          isYearly={isYearly}
        />
        <HorizontalCheckbox
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={2}
          isYearly={isYearly}
        />
        <HorizontalCheckbox
          title="Customizable profile"
          description="Custom theme on your profile"
          price={2}
          isYearly={isYearly}
        />
      </div>
    </section>
  );
}

export default Addons;
