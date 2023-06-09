import { useCallback } from 'react'
import { Step, Stepper } from '../components/Tools/Stepper'

const steps = [
  {
    label: 'Step 1',
    title: 'Your info'
  },
  {
    label: 'Step 2',
    title: 'Select Plan'
  },
  {
    label: 'Step 3',
    title: 'Add-ons'
  },
  {
    label: 'Step 4',
    title: 'Summary'
  }
]

function Aside({ step, setStep, lastValidatedStep }) {
  const handleClick = useCallback(
    (step) => {
      if (step <= lastValidatedStep || step === lastValidatedStep + 1) {
        setStep(step)
      }
    },
    [lastValidatedStep, setStep]
  )

  return (
    <aside className="aside">
      <Stepper step={step} onClick={handleClick}>
        {steps.map((step, i) => (
          <Step key={i}>
            <div className="aside-step-number">{i + 1}</div>
            <div className="aside-step-text">
              <p>{step.label}</p>
              <h2>{step.title}</h2>
            </div>
          </Step>
        ))}
      </Stepper>
    </aside>
  )
}

export default Aside
