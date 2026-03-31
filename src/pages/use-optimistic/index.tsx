import { FC, ReactElement, useOptimistic, useState, useTransition } from 'react'
import './UseOptimistic.scss'

interface IMessage {
  id: number
  text: string
  sending?: boolean
}

const sendMessage = async (text: string): Promise<IMessage> => {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  if (text.toLowerCase().includes('error')) {
    throw new Error('Failed to send message')
  }

  return { id: Date.now(), text }
}

const UseOptimisticPage: FC = (): ReactElement => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [input, setInput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage: IMessage) => [...state, { ...newMessage, sending: true }]
  )

  const handleSubmit = (formData: FormData) => {
    const text = formData.get('message') as string
    if (!text.trim()) return

    setInput('')
    setError(null)

    startTransition(async () => {
      addOptimisticMessage({ id: Date.now(), text })

      try {
        const confirmed = await sendMessage(text)
        setMessages((prev) => [...prev, confirmed])
      } catch {
        setError(`Failed to send "${text}". Try again.`)
      }
    })
  }

  return (
    <section className="optimistic">
      <h1 className="optimistic__title">useOptimistic</h1>
      <p className="optimistic__description">
        <code>useOptimistic</code> lets you update the UI instantly while an
        async action is in progress. Below, messages appear immediately in the
        list with a "Sending..." indicator — then either confirm or roll back.
        Type <code>error</code> in a message to simulate a failure.
      </p>

      <div className="optimistic__card">
        <div className="optimistic__messages">
          {optimisticMessages.length === 0 && (
            <p className="optimistic__empty">No messages yet. Send one!</p>
          )}
          {optimisticMessages.map((msg) => (
            <div
              key={msg.id}
              className={`optimistic__message ${msg.sending ? 'optimistic__message--pending' : ''}`}
            >
              <span className="optimistic__message-text">{msg.text}</span>
              {msg.sending && (
                <span className="optimistic__message-status">Sending...</span>
              )}
            </div>
          ))}
        </div>

        <form action={handleSubmit} className="optimistic__form">
          <input
            type="text"
            name="message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            required
          />
          <button type="submit" disabled={isPending}>
            Send
          </button>
        </form>

        {error && <p className="optimistic__error">{error}</p>}
      </div>

      <div className="optimistic__rules">
        <h2 className="optimistic__rules-title">Important Rules</h2>
        <ul className="optimistic__rules-list">
          <li className="optimistic__rules-item optimistic__rules-item--do">
            Use inside a Transition or form action — optimistic state reverts
            automatically when the action completes
          </li>
          <li className="optimistic__rules-item optimistic__rules-item--do">
            The reducer must be pure — it receives current state and an action
            value, and returns the new optimistic state
          </li>
          <li className="optimistic__rules-item optimistic__rules-item--do">
            When no action is pending, the optimistic state equals the real
            state — no manual cleanup needed
          </li>
          <li className="optimistic__rules-item optimistic__rules-item--dont">
            Do not mutate state in the reducer — always return a new object or
            array to trigger a re-render
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UseOptimisticPage
