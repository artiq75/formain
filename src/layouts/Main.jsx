import { Stepper, Step } from "../components/Stepper";
import { Button } from "../components/Tools";
import PersonalInfo from "../components/Steps/PersonalInfo";
import Plan from "../components/Steps/Plan";
import Addons from "../components/Steps/Addons";
import Summary from "../components/Steps/Summary";

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
