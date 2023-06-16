import { Stepper, Step } from '../components/Tools/Stepper'
import PersonalInfo from '../components/Steps/PersonalInfo'
import Plan from '../components/Steps/Plan'
import Addons from '../components/Steps/Addons'
import Summary from '../components/Steps/Summary'
import Thanks from '../components/Steps/Thanks'
import { useCallback, useState } from 'react'

function Main({ step, setStep, setLastValidatedStep }) {
  const [isYearly, setIsYearly] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [data, setData] = useState({
    personalInfo: {},
    plan: {},
    addons: {}
  })

  const handleToggle = useCallback(
    (isYearly) => {
      setIsYearly(isYearly)
    },
    [setIsYearly]
  )

  const handleConfirm = useCallback(
    (e) => {
      setIsConfirm(true)
    },
    [setIsConfirm]
  )

  const handleNext = useCallback(() => {
    setStep((step) => step + 1)
  }, [step, setStep])

  const handleBack = useCallback(() => {
    setStep((step) => step - 1)
  }, [setStep])

  const handleSubmit = useCallback(
    (newData) => {
      setData((data) => ({ ...data, ...newData }))
      setLastValidatedStep(step)
      handleNext()
    },
    [setData, handleNext, setLastValidatedStep, step]
  )

  return (
    <main className="main">
      <Stepper step={step}>
        <Step>
          <PersonalInfo onSubmit={handleSubmit} />
        </Step>
        <Step>
          <Plan
            isYearly={isYearly}
            onToggle={handleToggle}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        </Step>
        <Step>
          <Addons
            isYearly={isYearly}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        </Step>
        <Step>
          {!isConfirm ? (
            <Summary
              data={data}
              isYearly={isYearly}
              onBack={handleBack}
              onConfirm={handleConfirm}
            />
          ) : (
            <Thanks data={data} />
          )}
        </Step>
      </Stepper>
    </main>
  )
}

export default Main
