import { Stepper, Step } from "../components/Stepper";
import { Button } from "../components/Tools";
import PersonalInfo from "../components/Steps/PersonalInfo";
import Plan from "../components/Steps/Plan";
import Addons from "../components/Steps/Addons";
import Summary from "../components/Steps/Summary";
import { useCallback } from "react";

function Main({ step, setStep }) {
  const handleNext = useCallback(() => {
    setStep((step) => step + 1);
  }, [setStep]);

  const handleBack = useCallback(() => {
    setStep((step) => step - 1);
  }, [setStep]);

  return (
    <main className="main">
      <Stepper step={step}>
        <Step>
          <PersonalInfo />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="primary" onClick={handleNext}>
                Next Step
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Plan />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={handleBack}>
                Back
              </Button>
              <Button className="primary" onClick={handleNext}>
                Next Step
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Addons />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={handleBack}>
                Back
              </Button>
              <Button className="primary" onClick={handleNext}>
                Next Step
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Summary />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={handleBack}>
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
