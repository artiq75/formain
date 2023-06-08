import { Step, Stepper } from "../components/Stepper";

function Aside({ step }) {
  return (
    <aside>
      <Stepper step={step}>
        <Step>Your Info</Step>
        <Step>Select Plan</Step>
        <Step>Add-ons</Step>
        <Step>Summary</Step>
      </Stepper>
    </aside>
  );
}

export default Aside;
