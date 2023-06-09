import { Step, Stepper } from "../components/Stepper";

function Aside({ step }) {
  return (
    <aside>
      <Stepper step={step}>
        <Step>
          <p>Step 1</p>
          <h2>Your Info</h2>
        </Step>
        <Step>
          <p>Step 2</p>
          <h2>Select Plan</h2>
        </Step>
        <Step>
          <p>Step 3</p>
          <h2>Add-ons</h2>
        </Step>
        <Step>
          <p>Step 4</p>
          <h2>Summary</h2>
        </Step>
      </Stepper>
    </aside>
  );
}

export default Aside;
