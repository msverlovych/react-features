import { FC, ReactElement } from 'react'
import { Link } from 'react-router'
import './Home.scss'

const Home: FC = (): ReactElement => (
  <div className="home">
    <div className="container">
      <div className="home__wrapper">
        <h1 className="home__title">React Features</h1>
        <nav className="home__nav">
          <ul>
            <li><Link to="/use-effect">UseEffect</Link></li>
            <li><Link to="/use-memo">UseMemo</Link></li>
            <li><Link to="/react-memo">ReactMemo</Link></li>
            <li><Link to="/use-callback">UseCallback</Link></li>
            <li><Link to="/use-ref">UseRef</Link></li>
            <li><Link to="/flex-box">FlexBox</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Home;