import { Step, Stepper } from "../components/Stepper";

function Aside({ step }) {
  return (
    <aside className="aside">
      <Stepper step={step}>
        <Step>
          <div className="aside-step-number">1</div>
          <div className="aside-step-text">
            <p>Step 1</p>
            <h2>Your Info</h2>
          </div>
        </Step>
        <Step>
          <div className="aside-step-number">2</div>
          <div className="aside-step-text">
            <p>Step 2</p>
            <h2>Select Plan</h2>
          </div>
        </Step>
        <Step>
          <div className="aside-step-number">3</div>
          <div className="aside-step-text">
            <p>Step 3</p>
            <h2>Add-ons</h2>
          </div>
        </Step>
        <Step>
          <div className="aside-step-number">4</div>
          <div className="aside-step-text">
            <p>Step 4</p>
            <h2>Summary</h2>
          </div>
        </Step>
      </Stepper>
    </aside>
  );
}

export default Aside;
