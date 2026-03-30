import { FC, ReactElement } from 'react'
import './Loader.scss'

const Loader: FC = (): ReactElement => {
  return (
    <div className="loader">
      <svg
        className="loader__runner"
        viewBox="0 0 200 200"
        width="120"
        height="120"
      >
        {/* Head */}
        <circle
          cx="100"
          cy="40"
          r="14"
          fill="none"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="88"
          className="loader__pencil-stroke"
        />

        {/* Body */}
        <line
          x1="100"
          y1="54"
          x2="100"
          y2="110"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="loader__pencil-stroke"
        />

        {/* Left arm */}
        <line
          x1="100"
          y1="72"
          x2="70"
          y2="58"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="loader__arm-back"
        />

        {/* Right arm */}
        <line
          x1="100"
          y1="72"
          x2="130"
          y2="58"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="loader__arm-front"
        />

        {/* Left leg */}
        <line
          x1="100"
          y1="110"
          x2="72"
          y2="155"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="loader__leg-back"
        />

        {/* Left foot */}
        <line
          x1="72"
          y1="155"
          x2="62"
          y2="155"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="loader__foot-back"
        />

        {/* Right leg */}
        <line
          x1="100"
          y1="110"
          x2="128"
          y2="155"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="loader__leg-front"
        />

        {/* Right foot */}
        <line
          x1="128"
          y1="155"
          x2="138"
          y2="155"
          stroke="#dad7ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="loader__foot-front"
        />
      </svg>
      <span className="loader__text">Loading...</span>
    </div>
  )
}

export default Loader
