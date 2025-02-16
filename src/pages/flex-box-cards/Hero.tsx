import { FC, ReactElement } from 'react'
import Card, { ICard } from '../../components/card/Card'
import './Hero.scss'

import CardOne from '../../assets/card1.jpg'
import CardTwo from '../../assets/card2.jpg'
import CardThree from '../../assets/card3.jpg'
import CardFour from '../../assets/card4.jpg'
import CardFive from '../../assets/card5.jpg'
import CardSix from '../../assets/card6.jpg'

const cards: ICard[] = [
  { id: 0, title: 'Display Flex', subtitle: 'By default always in row', img: CardOne },
  { id: 2, title: 'Flex Direction', subtitle: 'Creates vertical or horysontal direction', img: CardTwo },
  { id: 3, title: 'Align Items', subtitle: 'Makes a spaces between items', img: CardThree },
  { id: 4, title: 'Align Itemqewdqwds', subtitle: 'Makes a qwdqwdqwdspaces between items', img: CardFour },
  { id: 5, title: 'Align Itemqewdqwds', subtitle: 'Makes a qwdqwdqwdspaces between items', img: CardFive },
  { id: 6, title: 'Align Itemqewdqwds', subtitle: 'Makes a qwdqwdqwdspaces between items', img: CardSix }
]

const Hero: FC = (): ReactElement => {
  return (
    <section className='hero'>
      <div className='wrapper'>
        <div className='hero__text'>
          <h1 className='hero__title'>
            Cards <span className='hero__title-accent'>example</span>
          </h1>
          <p className='hero__subtitle'>
            Please discover all latest react features with new, updated react docs: <a href="https://react.dev/">React.DEV</a>
          </p>
        </div>
        <div className='hero__cards'>
          {cards.map((item) => <Card { ...item } key={item.id} />)}
        </div>
      </div>
    </section>
  )
}

export default Hero