import { FC, ReactElement } from 'react'
import './SvgIcons.scss'

import Icon1 from '../../assets/svg/slot_1_empty.svg?react'
import Icon2 from '../../assets/svg/slot_2_empty.svg?react'
import Icon3 from '../../assets/svg/slot_3_empty.svg?react'
import Icon4 from '../../assets/svg/slot_4_empty.svg?react'
import Icon5 from '../../assets/svg/slot_5_empty.svg?react'
import Icon6 from '../../assets/svg/slot_6_empty.svg?react'
import Icon7 from '../../assets/svg/slot_7_empty.svg?react'
import Icon8 from '../../assets/svg/slot_8_empty.svg?react'
import Icon9 from '../../assets/svg/slot_9_empty.svg?react'
import Icon10 from '../../assets/svg/slot_10_empty.svg?react'
import Icon11 from '../../assets/svg/slot_11_empty.svg?react'
import Icon12 from '../../assets/svg/slot_12_empty.svg?react'

const icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11, Icon12]

const SvgIcons: FC = (): ReactElement => {
  return (
    <section className="svg-icons">
      <h1 className="svg-icons__title">SVG Icons</h1>
      <p className="svg-icons__description">
        SVGs imported as React components via{' '}
        <code>vite-plugin-svgr</code>. Each icon accepts standard SVG props
        like <code>color</code>, <code>width</code>, and <code>style</code> —
        making them fully themeable and scalable.
      </p>

      <div className="svg-icons__grid">
        {icons.map((Icon, i) => (
          <div key={i} className="svg-icons__item" role="img" aria-label={`Slot icon ${i + 1}`}>
            <Icon color="#4f7aa9" className="svg-icons__icon" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SvgIcons
