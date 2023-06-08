import { useState } from "react";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

function App() {
  const [step, setStep] = useState(1);

  return (
    <main>
      <Aside step={step} />
      <Main step={step} setStep={setStep} />
    </main>
  );
}

export default App;
