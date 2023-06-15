import { useRef, useState } from 'react'
import { Button, TextField } from '../Tools'
import * as yup from 'yup'
import { useFormValidation } from '../../hooks'

const required = 'This field is required'

let schema = yup.object().shape({
  name: yup.string().required(required),
  email: yup.string().required(required).email('Must be a valid email'),
  phone: yup.string().required(required)
})

function PersonalInfo({ onSubmit }) {
  const formRef = useRef(null)

  const [error] = useFormValidation(formRef, schema, onSubmit)

  return (
    <section className="personal-info">
      <div className="personal-info-header">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form className="personal-info-form" noValidate ref={formRef}>
        <TextField
          label="Name"
          name="name"
          placeholder="e.g. Stephen King"
          error={error?.name}
        />
        <TextField
          label="Email Address"
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          error={error?.email}
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          error={error?.phone}
        />
        <div role="footer" className="footer">
          <div className="footer-inner">
            <Button className="primary" type="submit">
              Next Step
            </Button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default PersonalInfo
