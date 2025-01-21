import { FC, memo, ReactElement, useState } from "react"
import './ReactMemo.scss'

const ExpensiveChild = memo(({ value }: { value: number }) => {
  console.log("Child re-rendered!")
  return <p className="child">Child Value: {value}</p>
});

const ReactMemo: FC = (): ReactElement => {
  const [count, setCount] = useState(0)
  const [otherValue, setOtherValue] = useState(0)

  console.log("Parent re-rendered!");


  return (
    <section className="reactMemo">
      <h1 className="reactMemo__title">React.memo</h1>
      <p className="reactMemo__count">Count: {count}</p>
      <p className="reactMemo__otherValue">Parent Value: {otherValue}</p>

      <ExpensiveChild value={count} />

      <div className="reactMemo__actions">
        <button className="reactMemo__actions-button" onClick={() => setCount(count + 1)}>Increment Child</button>
        <button className="reactMemo__actions-button" onClick={() => setOtherValue(otherValue + 1)}>
          Increment Parent
        </button>
      </div>
    </section>
  )
}

export default ReactMemo