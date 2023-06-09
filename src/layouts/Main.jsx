import { Stepper, Step } from "../components/Stepper";
import { Button } from "../components/Tools";
import PersonalInfo from "../components/Steps/PersonalInfo";
import Plan from "../components/Steps/Plan";
import Addons from "../components/Steps/Addons";
import Summary from "../components/Steps/Summary";

function Main({ step, setStep }) {
  return (
    <main className="main">
      <Stepper step={step}>
        <Step>
          <PersonalInfo />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="primary" onClick={() => setStep(step + 1)}>
                Next
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Plan />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={() => setStep(step - 1)}>
                Back
              </Button>
              <Button className="primary" onClick={() => setStep(step + 1)}>
                Next
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Addons />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={() => setStep(step - 1)}>
                Back
              </Button>
              <Button className="primary" onClick={() => setStep(step + 1)}>
                Next
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Summary />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={() => setStep(step - 1)}>
                Back
              </Button>
              <Button className="secondary">Confirm</Button>
            </div>
          </div>
        </Step>
      </Stepper>
    </main>
  );
}

export default Main;
