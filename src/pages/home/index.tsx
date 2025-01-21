import { FC, ReactElement } from 'react'
import { Link } from 'react-router'
import './Home.scss'

const Home: FC = (): ReactElement => (
  <section className="home">
    <h1 className='home__title'>React Hooks</h1>
    <nav className='home__nav'>
      <ul>
        <li><Link to="/use-effect">Use-effect</Link></li>
        <li><Link to="/use-memo">Use-Memo</Link></li>
        <li><Link to="/react-memo">React-memo</Link></li>
        <li><Link to="/use-callback">Use-Callback</Link></li>
        <li><Link to="/use-ref">Use-Ref</Link></li>
      </ul>
    </nav>
  </section>
);

export default Home;