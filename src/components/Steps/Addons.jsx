import { Tile } from "../Tools";

function Addons() {
  return (
    <section>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <Tile
        title="Online service"
        description="Access to multiplayer games"
        price={1}
        horizontal
      />
      <Tile
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price={2}
        horizontal
      />
      <Tile
        title="Customizable profile"
        description="Custom theme on your profile"
        price={2}
        horizontal
      />
    </section>
  );
}

export default Addons;
