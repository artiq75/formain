import { HorizontalCheckbox } from "../Tile";

function Addons() {
  return (
    <section>
      <div className="addons-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <HorizontalCheckbox
        title="Online service"
        description="Access to multiplayer games"
        price={1}
      />
      <HorizontalCheckbox
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={2}
      />
      <HorizontalCheckbox
        title="Customizable profile"
        description="Custom theme on your profile"
        price={2}
      />
    </section>
  );
}

export default Addons;
