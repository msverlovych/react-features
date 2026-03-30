import { Activity, FC, ReactElement, useState } from 'react'
import './Activity.scss'

type Tab = 'a' | 'b'

const Counter: FC<{ label: string }> = ({ label }): ReactElement => {
  const [count, setCount] = useState(0)

  return (
    <div className="activity__counter">
      <h2 className="activity__counter-label">{label}</h2>
      <span className="activity__counter-value">{count}</span>
      <div className="activity__counter-actions">
        <button
          className="activity__counter-btn"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className="activity__counter-btn"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

const ActivityPage: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<Tab>('a')

  return (
    <section className="activity">
      <h1 className="activity__title">Activity</h1>
      <p className="activity__description">
        The <code>&lt;Activity&gt;</code> component hides UI with{' '}
        <code>display: none</code> while preserving state. Switch tabs and
        notice the counters keep their values.
      </p>

      <div className="activity__tabs">
        <button
          className={`activity__tab ${activeTab === 'a' ? 'activity__tab--active' : ''}`}
          onClick={() => setActiveTab('a')}
        >
          Counter A
        </button>
        <button
          className={`activity__tab ${activeTab === 'b' ? 'activity__tab--active' : ''}`}
          onClick={() => setActiveTab('b')}
        >
          Counter B
        </button>
      </div>

      <div className="activity__content">
        <Activity mode={activeTab === 'a' ? 'visible' : 'hidden'}>
          <Counter label="Counter A" />
        </Activity>
        <Activity mode={activeTab === 'b' ? 'visible' : 'hidden'}>
          <Counter label="Counter B" />
        </Activity>
      </div>

      <p className="activity__hint">
        <strong>When it might be useful:</strong> Activity is ideal for tabbed
        interfaces, <span className="multi-step-forms">multi-step forms</span>, or offscreen preloading where you need to
        hide parts of the UI without losing user input or component state. It
        lets you trade a small memory cost for instant tab switches and a
        smoother user experience.
      </p>
    </section>
  )
}

export default ActivityPage
