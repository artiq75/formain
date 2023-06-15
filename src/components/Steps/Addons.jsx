import { useEffect, useMemo, useRef } from 'react'
import { useFormValidation } from '../../hooks'
import { Button, HorizontalCheckbox } from '../Tools/Tools'
import * as yup from 'yup'

const schema = yup.object().shape(
  {
    onlineService: yup.string().when(['largerStorage', 'customizableProfile'], {
      is: (largerStorage, customizableProfile) =>
        !largerStorage && !customizableProfile,
      then: () =>
        yup.string().required('You must choose at least one Addon-ons')
    }),
    largerStorage: yup.string().when(['onlineService', 'customizableProfile'], {
      is: (onlineService, customizableProfile) =>
        !onlineService && !customizableProfile,
      then: () =>
        yup.string().required('You must choose at least one Addon-ons')
    }),
    customizableProfile: yup.string().when(['onlineService', 'largerStorage'], {
      is: (onlineService, largerStorage) => !onlineService && !largerStorage,
      then: () =>
        yup.string().required('You must choose at least one Addon-ons')
    })
  },
  [
    ['onlineService', 'largerStorage'],
    ['onlineService', 'customizableProfile'],
    ['largerStorage', 'customizableProfile']
  ]
)

const addons = [
  {
    name: 'onlineService',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1
  },
  {
    name: 'largerStorage',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2
  },
  {
    name: 'customizableProfile',
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2
  }
]

function Addons({ isYearly, onBack, onSubmit }) {
  const formRef = useRef(null)

  const [errors] = useFormValidation(formRef, schema, (form) => {
    onSubmit({
      addons: addons
        .filter((addon) => Object.values(form).includes(addon.name))
        .map(({ title, price }) => ({ title, price }))
    })
  })

  const error = useMemo(() => {
    return Object.values(errors)[0]
  }, [errors])

  return (
    <section className="addons">
      <div className="addons-header">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <form className="addons-list" ref={formRef}>
        {error && <p className="error">{error}</p>}
        {addons.map((addon, i) => (
          <HorizontalCheckbox
            key={i}
            name={addon.name}
            value={addon.name}
            title={addon.title}
            description={addon.description}
            price={addon.price}
            isYearly={isYearly}
          />
        ))}
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
    </section>
  )
}

export default Addons
