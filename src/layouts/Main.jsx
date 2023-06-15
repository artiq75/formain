import { Stepper, Step } from '../components/Tools/Stepper'
import PersonalInfo from '../components/Steps/PersonalInfo'
import Plan from '../components/Steps/Plan'
import Addons from '../components/Steps/Addons'
import Summary from '../components/Steps/Summary'
import Thanks from '../components/Steps/Thanks'
import { useCallback, useState } from 'react'

function Main({ step, setStep }) {
  const [isYearly, setIsYearly] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [data, setData] = useState({
    personalInfo: {},
    plan: {},
    addons: {}
  })

  const handleToggle = useCallback(
    (e) => {
      setIsYearly(e.target.checked)
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
  }, [setStep])

  const handleBack = useCallback(() => {
    setStep((step) => step - 1)
  }, [setStep])

  const handleSubmit = (newData) => {
    setData((data) => ({ ...data, ...newData }))
    handleNext()
  }

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
