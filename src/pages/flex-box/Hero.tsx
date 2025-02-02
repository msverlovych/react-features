import { FC, ReactElement } from 'react'
import Card, { ICard } from '../../components/card/Card'
import './Hero.scss'

import CardOne from '../../assets/card1.jpg'
import CardTwo from '../../assets/card2.jpg'
import CardThree from '../../assets/card3.jpg'

const cards: ICard[] = [
  { id: 0, title: 'Display Flex', subtitle: 'By default always in row', img: CardOne },
  { id: 2, title: 'Flex Direction', subtitle: 'Creates vertical or horysontal direction', img: CardTwo },
  { id: 3, title: 'Align Items', subtitle: 'Makes a spaces between items', img: CardThree }
]

const Hero: FC = (): ReactElement => {
  return (
    <section className='hero'>
      <div className='hero__text container'>
        <h1 className='hero__title'>
          Flex box <span className='hero__title-accent'>introduction</span>
        </h1>
        <p className='hero__subtitle'>
          Please discover all latest react features with new, updated react docs: <a href="https://react.dev/">React.DEV</a>
        </p>
        <div className='hero__cards'>
          {cards.map((item) => <Card { ...item } key={item.id} />)}
        </div>
      </div>
    </section>
  )
}

export default Hero