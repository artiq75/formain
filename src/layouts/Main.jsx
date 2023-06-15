import { Stepper, Step } from '../components/Stepper'
import { Button } from '../components/Tools'
import PersonalInfo from '../components/Steps/PersonalInfo'
import Plan from '../components/Steps/Plan'
import Addons from '../components/Steps/Addons'
import Summary from '../components/Steps/Summary'
import { useCallback, useState } from 'react'

function Main({ step, setStep }) {
  const [personalInfo, setPersonalInfo] = useState(null)
  const [isYearly, setIsYearly] = useState(false)

  const handleToggle = useCallback(
    (e) => {
      setIsYearly(e.target.checked)
    },
    [setIsYearly]
  )

  const handleNext = useCallback(() => {
    setStep((step) => step + 1)
  }, [setStep])

  const handleBack = useCallback(() => {
    setStep((step) => step - 1)
  }, [setStep])

  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data)
    handleNext()
  }

  const handlePlanSubmit = (data) => {
    console.log(data)
    handleNext()
  }

  return (
    <main className="main">
      <Stepper step={step}>
        <Step>
          <PersonalInfo onSubmit={handlePersonalInfoSubmit} />
        </Step>
        <Step>
          <Plan
            isYearly={isYearly}
            onToggle={handleToggle}
            onBack={handleBack}
            onSubmit={handlePlanSubmit}
          />
        </Step>
        <Step>
          <Addons
            isYearly={isYearly}
            onBack={handleBack}
            onSubmit={handlePlanSubmit}
          />
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
  )
}

export default Main
