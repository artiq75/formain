import { useCallback, useEffect, useState } from 'react'

/**
 * Hooks allowing you validate react forms with Yup library
 *
 * @param {React.RefObject<HTMLFormElement>} ref React form ref
 * @param {object} schema Yup schema object (with default values very important)
 * @returns {Array<object>} Return an object of errors
 */
export function useFormValidation(ref, schema, onValidated) {
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
        // Set fields message error
        e.inner.forEach((err) => {
          setError((error) => ({
            ...error,
            [err.path]: err.message
          }))
        })
      }
    },
    [ref.current, schema, onValidated, setError]
  )

  useEffect(() => {
    ref.current.addEventListener('submit', handleSubmit)
    return () => ref.current.removeEventListener('submit', handleSubmit)
  }, [handleSubmit])

  return [error]
}
