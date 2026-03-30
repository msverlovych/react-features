import { FC, ReactElement, Suspense, use } from 'react'
import ErrorBoundary from '../../components/ErrorBoundary'
import Loader from '../../components/loader/Loader'
import './UseHook.scss'

interface IUser {
  id: number
  name: string
  email: string
  company: { name: string }
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const usersPromise: Promise<IUser[]> = fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
    return res.json()
  })
  .then((data) => delay(2000).then(() => data))

const UserList: FC = (): ReactElement => {
  const users = use(usersPromise)

  return (
    <ul className="use-hook__list">
      {users.map((user) => (
        <li key={user.id} className="use-hook__list-item">
          <span className="use-hook__list-name">{user.name}</span>
          <span className="use-hook__list-detail">{user.email}</span>
          <span className="use-hook__list-detail">{user.company.name}</span>
        </li>
      ))}
    </ul>
  )
}

const ErrorFallback: FC = (): ReactElement => (
  <div className="use-hook__error">
    Failed to load users. Please refresh the page.
  </div>
)

const UseHookPage: FC = (): ReactElement => {
  return (
    <section className="use-hook">
      <h1 className="use-hook__title">use()</h1>
      <p className="use-hook__description">
        The <code>use()</code> hook reads values from Promises or Context
        directly during render. Below, a list of users is fetched with a
        Promise and unwrapped with <code>use()</code> — wrapped in{' '}
        <code>&lt;Suspense&gt;</code> and <code>&lt;ErrorBoundary&gt;</code>.
      </p>

      <div className="use-hook__card">
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<Loader />}>
            <UserList />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div className="use-hook__rules">
        <h2 className="use-hook__rules-title">Important Rules</h2>
        <ul className="use-hook__rules-list">
          <li className="use-hook__rules-item use-hook__rules-item--do">
            Works with Promises and Context only (not arbitrary values)
          </li>
          <li className="use-hook__rules-item use-hook__rules-item--do">
            Must be used with Suspense when reading Promises
          </li>
          <li className="use-hook__rules-item use-hook__rules-item--do">
            Must be used with ErrorBoundary for error handling
          </li>
          <li className="use-hook__rules-item use-hook__rules-item--dont">
            The Promise should be created outside the component or be stable —
            creating it inline on every render will cause an infinite loop!
          </li>
        </ul>
      </div>
    </section>
  )
}

export default UseHookPage
