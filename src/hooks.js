import { useCallback, useEffect, useState } from 'react'

/**
 * Hooks allowing you validate react forms with Yup library
 *
 * @param {React.RefObject<HTMLFormElement>} formRef React form ref
 * @param {object} schema Yup schema objects
 * @param {Function} onValidated Function to be called with validated data
 * @returns {Array<object>} Return an object of errors
 */
export function useFormValidation(formRef, schema, onValidated = () => {}) {
  const [error, setError] = useState({})

  const handleSubmit = useCallback((e) => {
      e.preventDefault()
      // Recovering fields
      const formData = {
        ...Object.fromEntries(new FormData(e.target).entries())
      }
      // Cleanup up old errors
      setError({})
      try {
        // Validate all fields
        schema.validateSync(formData, { abortEarly: false })
        // Call the callback when the form is validated
        onValidated(formData)
      } catch (e) {
        // Set field(s) message error
        if (!e.inner?.length) {
          setError({
            [e.path]: e.message
          })
        } else {
          e.inner.forEach((e) => {
            setError((errors) => ({
              ...errors,
              [e.path]: e.message
            }))
          })
        }
      }
    },
    [schema, onValidated, setError]
  )

  useEffect(() => {
    if (formRef.current instanceof HTMLFormElement) {
      formRef.current.addEventListener('submit', handleSubmit)
    }
    return () => {
      if (formRef.current instanceof HTMLFormElement) {
        formRef.current.removeEventListener('submit', handleSubmit)
      }
    }
  }, [formRef.current, handleSubmit])

  return [error]
}
