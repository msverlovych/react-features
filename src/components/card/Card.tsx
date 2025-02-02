import { FC, ReactElement } from "react"
import './Card.scss'

export interface ICard {
  id: number,
  title: string,
  subtitle: string,
  img: string
}

const Card: FC<ICard> = ({ title, subtitle, img }): ReactElement => (
  <div className='card'>
    <img className='card__image' src={img} alt="product" />
    <div className='card__text'>
      <h2 className='card__text-title'>{title}</h2>
      <p className='card__text-description'>{subtitle}</p>
    </div>
    <button className='card__button'>
      view more
    </button>
  </div>
)

export default Card