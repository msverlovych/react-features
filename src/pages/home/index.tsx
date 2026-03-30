import { FC, ReactElement } from 'react'
import { Link } from 'react-router'
import './Home.scss'

const navItems = [
  { to: '/use-effect', label: 'UseEffect' },
  { to: '/flex-box-cards', label: 'FlexBox Cards' },
  { to: '/flex-box', label: 'FlexBox' },
  { to: '/svgs', label: 'SVGS' },
  { to: '/activity', label: 'Activity' },
  { to: '/use-effect-event', label: 'useEffectEvent' },
  { to: '/use-hook', label: 'use()' },
  { to: '/form-action', label: 'Form Actions' },
]

const Home: FC = (): ReactElement => (
  <section className="home">
    <div className="home__wrapper">
      <span className="home__badge">React 19 Playground</span>
      <h1 className="home__title">
        React <span className="home__title-accent">Features</span>
      </h1>
      <p className="home__subtitle">
        Explore modern React patterns, hooks, and APIs through interactive demos.
      </p>

      <nav className="home__nav">
        <ul>
          {navItems.map(({ to, label }, i) => (
            <li key={to} style={{ animationDelay: `${0.3 + i * 0.07}s` }}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link to="/react19-overview" className="home__overview-btn">
        React 19 Overview
      </Link>
    </div>
  </section>
);

export default Home;