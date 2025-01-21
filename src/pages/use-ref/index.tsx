import { FC, ReactElement, useRef } from 'react'
import './UseRef.scss'

const UseRef: FC = (): ReactElement => {
  // const [time, setTime] = useState(0)
  // const timerRef = useRef<number | null>(null)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log("Input focused!");
    }
  };

  // const startTimer = () => {
  //   if (timerRef.current) return

  //   timerRef.current = window.setInterval(() => {
  //     setTime((prevTime) => prevTime + 1);
  //   }, 1000)
  // }

  // const stopTimer = () => {
  //   if (timerRef.current) {
  //     clearInterval(timerRef.current)
  //     timerRef.current = null
  //   }
  // };

  // const resetTimer = () => {
  //   stopTimer()
  //   setTime(0)
  // }
  
  return (
    <section className="useRef">
      <h1 className='useRef__title'>use reference</h1>

      {/* <p className='useRef__time'>Time: {time}s</p>

      <div style={{ width: "300px" }}>
        <button className='useRef__button' onClick={startTimer}>Start</button>
        <button className='useRef__button' onClick={stopTimer}>Stop</button>
        <button className='useRef__button' onClick={resetTimer}>Reset</button>
      </div> */}

      <form className='useRef__block'>
        <input className='useRef__block-input' ref={inputRef} type="text" placeholder="Type something..." />
        <button className='useRef__block-button' onClick={focusInput}>Focus Input</button>
      </form>
    </section>
  )
}

export default UseRef