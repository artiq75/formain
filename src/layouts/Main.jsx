import { Stepper, Step } from "../components/Stepper";
import { Button } from "../components/Tools";

function Main({ step, setStep }) {
  return (
    <>
      <Stepper step={step}>
        <Step>
          <PersonalInfo />
          <Button onClick={() => setStep(step + 1)}>Next</Button>
        </Step>
        <Step>
          <Plan />
          <Button onClick={() => setStep(step + 1)}>Next</Button>
          <Button onClick={() => setStep(step - 1)}>Back</Button>
        </Step>
        <Step>
          <Addons />
          <Button onClick={() => setStep(step + 1)}>Next</Button>
          <Button onClick={() => setStep(step - 1)}>Back</Button>
        </Step>
        <Step>
          <Summary />
          <Button onClick={() => setStep(step - 1)}>Back</Button>
        </Step>
      </Stepper>
    </>
  );
}

export default Main;

function PersonalInfo() {
  return (
    <section>
      <h1>Personal Info</h1>
    </section>
  );
}

function Plan() {
  return (
    <section>
      <h1>Plan</h1>
    </section>
  );
}

function Addons() {
  return (
    <section>
      <h1>Addons</h1>
    </section>
  );
}

function Summary() {
  return (
    <section>
      <h1>Summary</h1>
    </section>
  );
}
