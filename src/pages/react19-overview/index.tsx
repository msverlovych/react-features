import { FC, ReactElement, useState } from 'react'
import './React19Overview.scss'

type CatMode = 'none' | 'love' | 'attack'

const LoveCat: FC = (): ReactElement => (
  <div className="cat-love">
    <svg viewBox="0 0 200 220" width="200" height="220" className="cat-love__svg">
      {/* Ears */}
      <polygon points="55,70 40,20 80,55" fill="none" stroke="#dad7ff" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="145,70 160,20 120,55" fill="none" stroke="#dad7ff" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Inner ears */}
      <polygon points="58,65 48,30 75,55" fill="rgba(255,75,117,0.3)" stroke="none" />
      <polygon points="142,65 152,30 125,55" fill="rgba(255,75,117,0.3)" stroke="none" />
      {/* Head */}
      <ellipse cx="100" cy="80" rx="50" ry="42" fill="none" stroke="#dad7ff" strokeWidth="2.5" />
      {/* Eyes — happy closed */}
      <path d="M 75 75 Q 80 68 85 75" fill="none" stroke="#dad7ff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 115 75 Q 120 68 125 75" fill="none" stroke="#dad7ff" strokeWidth="2.5" strokeLinecap="round" />
      {/* Blush */}
      <circle cx="68" cy="85" r="7" fill="rgba(255,75,117,0.25)" />
      <circle cx="132" cy="85" r="7" fill="rgba(255,75,117,0.25)" />
      {/* Nose */}
      <polygon points="100,84 96,89 104,89" fill="rgba(255,75,117,0.6)" />
      {/* Mouth — smile */}
      <path d="M 92 92 Q 100 102 108 92" fill="none" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="60" y1="82" x2="30" y2="78" stroke="#dad7ff" strokeWidth="1.5" opacity="0.6" />
      <line x1="60" y1="88" x2="30" y2="90" stroke="#dad7ff" strokeWidth="1.5" opacity="0.6" />
      <line x1="140" y1="82" x2="170" y2="78" stroke="#dad7ff" strokeWidth="1.5" opacity="0.6" />
      <line x1="140" y1="88" x2="170" y2="90" stroke="#dad7ff" strokeWidth="1.5" opacity="0.6" />
      {/* Body */}
      <ellipse cx="100" cy="155" rx="40" ry="45" fill="none" stroke="#dad7ff" strokeWidth="2.5" />
      {/* Paws */}
      <ellipse cx="75" cy="195" rx="12" ry="8" fill="none" stroke="#dad7ff" strokeWidth="2" />
      <ellipse cx="125" cy="195" rx="12" ry="8" fill="none" stroke="#dad7ff" strokeWidth="2" />
      {/* Tail */}
      <path d="M 140 170 Q 170 160 165 130" fill="none" stroke="#dad7ff" strokeWidth="2.5" strokeLinecap="round" className="cat-love__tail" />
    </svg>

    {/* Floating hearts */}
    <div className="cat-love__hearts">
      <span className="cat-love__heart cat-love__heart--1">&#10084;</span>
      <span className="cat-love__heart cat-love__heart--2">&#10084;</span>
      <span className="cat-love__heart cat-love__heart--3">&#10084;</span>
    </div>
  </div>
)

const AttackCat: FC = (): ReactElement => (
  <div className="cat-attack">
    <svg viewBox="0 0 220 200" width="220" height="200" className="cat-attack__svg">
      {/* Ears — flattened/angry */}
      <polygon points="45,75 20,35 70,60" fill="none" stroke="#dad7ff" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="155,75 180,35 130,60" fill="none" stroke="#dad7ff" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Inner ears */}
      <polygon points="48,70 30,42 65,60" fill="rgba(255,75,117,0.4)" stroke="none" />
      <polygon points="152,70 170,42 135,60" fill="rgba(255,75,117,0.4)" stroke="none" />
      {/* Head */}
      <ellipse cx="100" cy="82" rx="52" ry="44" fill="none" stroke="#dad7ff" strokeWidth="2.5" />
      {/* Eyes — angry */}
      <line x1="72" y1="70" x2="88" y2="76" stroke="#dad7ff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="80" cy="80" r="5" fill="rgb(255,75,117)" />
      <line x1="128" y1="70" x2="112" y2="76" stroke="#dad7ff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="120" cy="80" r="5" fill="rgb(255,75,117)" />
      {/* Nose */}
      <polygon points="100,88 96,93 104,93" fill="rgba(255,75,117,0.6)" />
      {/* Mouth — hissing */}
      <path d="M 88 98 L 95 95 L 100 100 L 105 95 L 112 98" fill="none" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Fangs */}
      <line x1="93" y1="97" x2="93" y2="103" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
      <line x1="107" y1="97" x2="107" y2="103" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
      {/* Whiskers — spiky */}
      <line x1="55" y1="82" x2="25" y2="72" stroke="#dad7ff" strokeWidth="1.5" opacity="0.7" />
      <line x1="55" y1="90" x2="25" y2="95" stroke="#dad7ff" strokeWidth="1.5" opacity="0.7" />
      <line x1="145" y1="82" x2="175" y2="72" stroke="#dad7ff" strokeWidth="1.5" opacity="0.7" />
      <line x1="145" y1="90" x2="175" y2="95" stroke="#dad7ff" strokeWidth="1.5" opacity="0.7" />
      {/* Body — arched */}
      <path d="M 60 120 Q 100 100 140 120 Q 145 155 100 165 Q 55 155 60 120" fill="none" stroke="#dad7ff" strokeWidth="2.5" />
      {/* Front claws */}
      <g className="cat-attack__claw-left">
        <line x1="55" y1="145" x2="40" y2="165" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="165" x2="32" y2="160" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="165" x2="35" y2="170" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="165" x2="42" y2="173" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g className="cat-attack__claw-right">
        <line x1="145" y1="145" x2="160" y2="165" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="160" y1="165" x2="168" y2="160" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="160" y1="165" x2="165" y2="170" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="160" y1="165" x2="158" y2="173" stroke="#dad7ff" strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* Tail — puffed up */}
      <path d="M 60 130 Q 20 120 25 90 Q 30 75 40 85" fill="none" stroke="#dad7ff" strokeWidth="3" strokeLinecap="round" className="cat-attack__tail" />
    </svg>

    {/* Scratch marks */}
    <div className="cat-attack__scratches">
      <span className="cat-attack__scratch cat-attack__scratch--1">/</span>
      <span className="cat-attack__scratch cat-attack__scratch--2">/</span>
      <span className="cat-attack__scratch cat-attack__scratch--3">/</span>
    </div>
  </div>
)

const React19OverviewPage: FC = (): ReactElement => {
  const [catMode, setCatMode] = useState<CatMode>('none')

  return (
    <section className="overview">
      <h1 className="overview__title">React 19 Overview</h1>

      <div className="overview__card">
        <h2 className="overview__subtitle">React Compiler</h2>
        <p className="overview__text">
          Automatic memoization at build time. No more manual{' '}
          <code>useMemo</code>, <code>useCallback</code>, or{' '}
          <code>React.memo</code> — the compiler handles it for you, making
          your code simpler and faster out of the box.
        </p>
      </div>

      <div className="overview__card">
        <h2 className="overview__subtitle">New Hooks & APIs</h2>
        <ul className="overview__list">
          <li>
            <code>use()</code> — read Promises and Context directly during
            render
          </li>
          <li>
            <code>useEffectEvent</code> — stable callbacks inside Effects
            without stale closures
          </li>
          <li>
            <code>useFormStatus</code> — access parent form submission state
          </li>
          <li>
            <code>useOptimistic</code> — optimistic UI updates during async
            actions
          </li>
          <li>
            <code>useActionState</code> — manage form action state with
            built-in pending tracking
          </li>
          <li>
            <code>&lt;Activity&gt;</code> — hide UI while preserving component
            state
          </li>
        </ul>
      </div>

      <p className="overview__question">
        What happens to the cat when you follow — or break — the React rules?
      </p>

      <div className="overview__actions">
        <button
          className={`overview__btn overview__btn--love ${catMode === 'love' ? 'overview__btn--active-love' : ''}`}
          onClick={() => setCatMode(catMode === 'love' ? 'none' : 'love')}
        >
          Follow the Rules
        </button>
        <button
          className={`overview__btn overview__btn--attack ${catMode === 'attack' ? 'overview__btn--active-attack' : ''}`}
          onClick={() => setCatMode(catMode === 'attack' ? 'none' : 'attack')}
        >
          Break the Rules
        </button>
      </div>

      <div className="overview__cat-area">
        {catMode === 'love' && <LoveCat />}
        {catMode === 'attack' && <AttackCat />}
      </div>
    </section>
  )
}

export default React19OverviewPage
