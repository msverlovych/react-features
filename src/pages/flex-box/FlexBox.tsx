import { FC, ReactElement, useState } from 'react'
import './FlexBox.scss'

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

const FlexBox: FC = (): ReactElement => {
  const [direction, setDirection] = useState<FlexDirection>('row')
  const [justify, setJustify] = useState<JustifyContent>('flex-start')
  const [align, setAlign] = useState<AlignItems>('stretch')
  const [wrap, setWrap] = useState<FlexWrap>('nowrap')
  const [gap, setGap] = useState(12)

  const containerStyle = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap: `${gap}px`,
  }

  return (
    <section className="flexbox">
      <h1 className="flexbox__title">Flexbox</h1>
      <p className="flexbox__description">
        Adjust the controls to see how CSS Flexbox properties affect the layout
        in real time.
      </p>

      <div className="flexbox__playground">
        <div className="flexbox__controls">
          <Control
            label="flex-direction"
            value={direction}
            options={['row', 'row-reverse', 'column', 'column-reverse']}
            onChange={(v) => setDirection(v as FlexDirection)}
          />
          <Control
            label="justify-content"
            value={justify}
            options={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
            onChange={(v) => setJustify(v as JustifyContent)}
          />
          <Control
            label="align-items"
            value={align}
            options={['flex-start', 'flex-end', 'center', 'stretch', 'baseline']}
            onChange={(v) => setAlign(v as AlignItems)}
          />
          <Control
            label="flex-wrap"
            value={wrap}
            options={['nowrap', 'wrap', 'wrap-reverse']}
            onChange={(v) => setWrap(v as FlexWrap)}
          />
          <div className="flexbox__control">
            <label className="flexbox__control-label">gap: {gap}px</label>
            <input
              type="range"
              min="0"
              max="40"
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="flexbox__slider"
            />
          </div>
        </div>

        <div className="flexbox__preview" style={containerStyle}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="flexbox__item">
              {n}
            </div>
          ))}
        </div>

        <code className="flexbox__code">
          {`display: flex;\nflex-direction: ${direction};\njustify-content: ${justify};\nalign-items: ${align};\nflex-wrap: ${wrap};\ngap: ${gap}px;`}
        </code>
      </div>
    </section>
  )
}

interface ControlProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

const Control: FC<ControlProps> = ({ label, value, options, onChange }) => (
  <div className="flexbox__control">
    <label className="flexbox__control-label">{label}</label>
    <div className="flexbox__control-options">
      {options.map((opt) => (
        <button
          key={opt}
          className={`flexbox__control-btn ${opt === value ? 'flexbox__control-btn--active' : ''}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
)

export default FlexBox
