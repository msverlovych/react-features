import { FC, ReactElement, useState, ChangeEvent, FormEvent } from 'react'
import './FormAction.scss'

const FormAction: FC = (): ReactElement => {
  const [formData, setFormData] = useState({ title: '', description: '' })
  const [isPending, setIsPending] = useState(false)
  const [responseMessage, setResponseMessage] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    setResponseMessage(null)

    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const result = await response.json()
      setFormData({ title: '', description: '' })
      setResponseMessage(`Product added successfully with ID: ${result.id}`)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error'
      console.error(message)
      setResponseMessage('Error submitting the form. Please try again later.')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section className="form-action">
      <h1 className="form-action__title">Form Actions</h1>
      <p className="form-action__description">
        A classic form submission pattern using React state and{' '}
        <code>fetch</code>. Handles pending state, success feedback, and error
        recovery.
      </p>

      <form onSubmit={handleSubmit} className="form-action__form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product title..."
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product description..."
          rows={4}
          required
        />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {responseMessage && (
        <p className="form-action__response">{responseMessage}</p>
      )}
    </section>
  )
}

export default FormAction
