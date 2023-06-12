import { HorizontalTile } from "../Tools";

function Addons() {
  return (
    <section>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <HorizontalTile
        title="Online service"
        description="Access to multiplayer games"
        price={1}
      />
      <HorizontalTile
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={2}
      />
      <HorizontalTile
        title="Customizable profile"
        description="Custom theme on your profile"
        price={2}
      />
    </section>
  );
}

export default Addons;
