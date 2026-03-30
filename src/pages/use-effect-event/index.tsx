import { FC, ReactElement, useEffect, useEffectEvent, useState } from 'react'
import './UseEffectEvent.scss'

const UseEffectEventPage: FC = (): ReactElement => {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)
  const [running, setRunning] = useState(false)

  const onTick = useEffectEvent(() => {
    setCount((prev) => prev + increment)
  })

  useEffect(() => {
    if (!running) return

    const id = setInterval(() => {
      onTick()
    }, 1000)

    return () => clearInterval(id)
  }, [running])

  return (
    <section className="effect-event">
      <h1 className="effect-event__title">useEffectEvent</h1>
      <p className="effect-event__description">
        <code>useEffectEvent</code> lets you read the latest props and state
        inside an Effect without adding them to the dependency array. The timer
        below always uses the current <strong>increment</strong> value — yet
        changing it does not restart the interval.
      </p>

      <div className="effect-event__card">
        <span className="effect-event__count">{count}</span>

        <div className="effect-event__increment">
          <label className="effect-event__label">Increment by:</label>
          <div className="effect-event__increment-controls">
            <button
              className="effect-event__btn effect-event__btn--small"
              onClick={() => setIncrement((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="effect-event__increment-value">{increment}</span>
            <button
              className="effect-event__btn effect-event__btn--small"
              onClick={() => setIncrement((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        <div className="effect-event__actions">
          <button
            className={`effect-event__btn ${running ? 'effect-event__btn--stop' : 'effect-event__btn--start'}`}
            onClick={() => setRunning((prev) => !prev)}
          >
            {running ? 'Stop' : 'Start'}
          </button>
          <button
            className="effect-event__btn effect-event__btn--reset"
            onClick={() => {
              setCount(0)
              setRunning(false)
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <p className="effect-event__hint">
        <strong>Why it matters:</strong> Without <code>useEffectEvent</code>,
        changing the increment value would restart the interval and lose its
        timing. With it, the Effect stays stable while always reading the
        freshest state.
      </p>
    </section>
  )
}

export default UseEffectEventPage
