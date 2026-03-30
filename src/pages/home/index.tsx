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
          <li><Link to="/flex-box-cards">FlexBox Cards</Link></li>
          <li><Link to="/flex-box">FlexBox</Link></li>
          <li><Link to="/svgs">SVGS</Link></li>
        </ul>
      </nav>
    </div>
  </section>
);

export default Home;