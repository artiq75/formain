import { useState } from "react";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

function App() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Aside step={step} setStep={setStep} />
      <Main step={step} setStep={setStep} />
    </>
  );
}

export default App;
