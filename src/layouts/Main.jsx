import { Stepper, Step } from "../components/Stepper";
import { Button } from "../components/Tools";
import PersonalInfo from "../components/Steps/PersonalInfo";
import Plan from "../components/Steps/Plan";
import Addons from "../components/Steps/Addons";
import Summary from "../components/Steps/Summary";
import { useCallback, useState } from "react";

function Main({ step, setStep }) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (e) => {
    setIsYearly(e.target.checked);
  };

  const handleNext = useCallback(() => {
    setStep((step) => step + 1);
  }, [setStep]);

  const handleBack = useCallback(() => {
    setStep((step) => step - 1);
  }, [setStep]);

  const handleSubmit = (data) => {
    console.log(data);
    handleNext();
  };

  return (
    <main className="main">
      <Stepper step={step}>
        <Step>
          <PersonalInfo onSubmit={handleSubmit} />
        </Step>
        <Step>
          <Plan isYearly={isYearly} onToggle={handleToggle} />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={handleBack}>
                Go Back
              </Button>
              <Button className="primary" onClick={handleNext}>
                Next Step
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Addons isYearly={isYearly} />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={handleBack}>
                Go Back
              </Button>
              <Button className="primary" onClick={handleNext}>
                Next Step
              </Button>
            </div>
          </div>
        </Step>
        <Step>
          <Summary isYearly={isYearly} />
          <div role="footer" className="footer">
            <div className="footer-inner">
              <Button className="outlined" onClick={handleBack}>
                Go Back
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
