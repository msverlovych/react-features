/* eslint-disable no-empty */
import { FC, ReactElement, useMemo, useState } from "react"
import './UseMemo.scss'

const UseMemo: FC = (): ReactElement => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  const expensiveCalculation = (num: number): number => {
    console.log("Running expensive calculation...")
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2
  };

  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <section className="useMemo">
      <h1 className="useMemo__title">USE MEMO</h1>
      <div className="useMemo__block">
        <p className="useMemo__count">Count: {count}</p>
        <p className="useMemo__value">Memoized Result: {memoizedValue}</p>
        <button className="useMemo__button" onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
      </div>
      <br />
      <div className="useMemo__block">
        <input
          type="text"
          className="useMemo__input"
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="useMemo__span">Value: {input}</span>
      </div>
    </section>
  )
}

export default UseMemo