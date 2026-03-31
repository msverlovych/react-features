import { FC, ReactElement, useState } from 'react'
import { useFormStatus } from 'react-dom'
import './UseFormStatus.scss'

const simulateSubmit = async (formData: FormData): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  return `Registered ${name} (${email}) successfully!`
}

const SubmitButton: FC = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="form-status__btn"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Register'}
    </button>
  )
}

const FormFields: FC = () => {
  const { pending } = useFormStatus()

  return (
    <fieldset className="form-status__fieldset" disabled={pending}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name..."
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        required
      />
    </fieldset>
  )
}

const UseFormStatusPage: FC = (): ReactElement => {
  const [result, setResult] = useState<string | null>(null)

  const handleAction = async (formData: FormData) => {
    setResult(null)
    const message = await simulateSubmit(formData)
    setResult(message)
  }

  return (
    <section className="form-status">
      <h1 className="form-status__title">useFormStatus</h1>
      <p className="form-status__description">
        <code>useFormStatus</code> gives you status information about the last
        form submission. It must be called from a component rendered{' '}
        <strong>inside</strong> a <code>&lt;form&gt;</code>. Below, both the
        submit button and the fields read <code>pending</code> to disable
        themselves during submission.
      </p>

      <div className="form-status__card">
        <form action={handleAction} className="form-status__form">
          <FormFields />
          <SubmitButton />
        </form>

        {result && (
          <p className="form-status__result">{result}</p>
        )}
      </div>

      <div className="form-status__rules">
        <h2 className="form-status__rules-title">Important Rules</h2>
        <ul className="form-status__rules-list">
          <li className="form-status__rules-item form-status__rules-item--do">
            Must be called from a component rendered inside a{' '}
            <code>&lt;form&gt;</code> — not from the component that renders the
            form itself
          </li>
          <li className="form-status__rules-item form-status__rules-item--do">
            Returns <code>pending</code>, <code>data</code>,{' '}
            <code>method</code>, and <code>action</code> from the parent form
          </li>
          <li className="form-status__rules-item form-status__rules-item--do">
            The form must use an <code>action</code> prop (function) — it does
            not work with <code>onSubmit</code>
          </li>
          <li className="form-status__rules-item form-status__rules-item--dont">
            If called outside a form, <code>pending</code> will always be{' '}
            <code>false</code> — it silently fails without any error!
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UseFormStatusPage
