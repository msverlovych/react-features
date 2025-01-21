import { FC, memo, ReactElement, useCallback, useState } from 'react'
import './UseCallback.scss'

const ChildButton = memo(({ onClick, className }: { onClick: () => void, className?: string }) => {
  console.log("ChildButton rendered!")
  return <button className={className} onClick={onClick}>Re-render child</button>
})

const UseCallback: FC = (): ReactElement => {
  const [count, setCount] = useState(0)
  const [otherValue, setOtherValue] = useState(0)

  const handleChildClick = useCallback(() => {
    console.log("Button clicked!")
    setCount((prevCount) => prevCount + 1)
  }, [])

  const incrementChild = () => {
    console.log('child is incremented');
    setCount(count + 1)
  }
  const incrementParent = () => {
    console.log('parent is incremented');
    setOtherValue(otherValue + 1)
  }
  
  return (
    <section className="useCallback">
      <h1 className="useCallback__title">Use Callback</h1>
      <p className="useCallback__count">Child Value: {count}</p>
      <p className="useCallback__otherValue">Parent Value: {otherValue}</p>

      <div className="useCallback__actions">

        <ChildButton className='useCallback__actions-button' onClick={handleChildClick} />

        <button className="useCallback__actions-button" onClick={incrementChild}>
          Increment Child
        </button>
        <button className="useCallback__actions-button" onClick={incrementParent}>
          Increment Parent
        </button>
      </div>
    </section>
  )  
}

export default UseCallback