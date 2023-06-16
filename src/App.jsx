import { useState } from 'react'
import Aside from './layouts/Aside'
import Main from './layouts/Main'

function App() {
  const [step, setStep] = useState(1)
  const [lastValidatedStep, setLastValidatedStep] = useState(0)

  return (
    <>
      <Aside
        step={step}
        setStep={setStep}
        lastValidatedStep={lastValidatedStep}
      />
      <Main
        step={step}
        setStep={setStep}
        setLastValidatedStep={setLastValidatedStep}
      />
    </>
  )
}

export default App
