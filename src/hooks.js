import { useCallback, useEffect, useState } from 'react'

/**
 * Hooks allowing you validate react forms with Yup library
 *
 * @param {React.RefObject<HTMLFormElement>} formRef React form ref
 * @param {object} schema Yup schema object (with default values very important)
 * @returns {Array<object>} Return an object of errors
 */
export function useFormValidation(formRef, schema, onValidated) {
  const [error, setError] = useState({})

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      // Cleanup up old errors
      setError({})
      try {
        // Recover all fields
        const form = { ...Object.fromEntries(formData.entries()) }
        // Validate all fields
        schema.validateSync(form, { abortEarly: false })
        // Call the callback when the form is validated
        onValidated(form)
      } catch (e) {
        // Set field(s) message error
        if (!e.inner?.length) {
          setError({
            [e.path]: e.message
          })
        } else {
          e.inner.forEach((err) => {
            setError((error) => ({
              ...error,
              [err.path]: err.message
            }))
          })
        }
      }
    },
    [formRef.current, schema, onValidated, setError]
  )

  useEffect(() => {
    formRef.current.addEventListener('submit', handleSubmit)
    return () => formRef.current.removeEventListener('submit', handleSubmit)
  }, [handleSubmit])

  return [error]
}
