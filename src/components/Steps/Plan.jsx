import { useRef } from 'react'
import { useFormValidation } from '../../hooks'
import { Tile } from '../Tile'
import { Toggle, Button } from '../Tools'
import * as yup from 'yup'

let schema = yup.object().shape({
  plan: yup.string().required('You must choose at least one plan')
})

function Plan({ isYearly, onToggle, onBack, onSubmit }) {
  const formRef = useRef(null)

  const [error] = useFormValidation(formRef, schema, onSubmit)

  return (
    <section className="plan">
      <div className="plan-header">
        <h1 className="plan-title">Select your plan</h1>
        <p className="plan-description">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      {error?.plan && <p className="error">{error.plan}</p>}
      <form ref={formRef}>
        <Tile
          name="plan"
          icon="arcade"
          title="Arcade"
          price={9}
          isYearly={isYearly}
        />
        <Tile
          name="plan"
          icon="advanced"
          title="Advanced"
          price={12}
          isYearly={isYearly}
        />
        <Tile
          name="plan"
          icon="pro"
          title="Pro"
          price={15}
          isYearly={isYearly}
        />
        <div role="footer" className="footer">
          <div className="footer-inner">
            <Button className="outlined" type="button" onClick={onBack}>
              Go Back
            </Button>
            <Button className="primary" type="submit">
              Next Step
            </Button>
          </div>
        </div>
      </form>
      <Toggle
        firstLabel="Monthly"
        secondLabel="Yearly"
        isToggle={isYearly}
        onToggle={onToggle}
      />
    </section>
  )
}

export default Plan
