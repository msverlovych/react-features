import { FC, ReactElement } from 'react'
import { Link } from 'react-router'
import './Home.scss'

const Home: FC = (): ReactElement => (
  <section className="home">
    <div className='home__wrapper'>
      <h1 className="home__title">React Features</h1>
      <nav className="home__nav">
        <ul>
          <li><Link to="/use-effect">UseEffect</Link></li>
          <li><Link to="/use-memo">UseMemo</Link></li>
          <li><Link to="/react-memo">ReactMemo</Link></li>
          <li><Link to="/use-callback">UseCallback</Link></li>
          <li><Link to="/use-ref">UseRef</Link></li>
          <li><Link to="/flex-box-cards">FlexBox Cards</Link></li>
          <li><Link to="/flex-box">FlexBox</Link></li>
          <li><Link to="/reactstrap">ReactStrap</Link></li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Home;