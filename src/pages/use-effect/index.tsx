import { FC, ReactElement, useEffect, useState } from "react"
import Loader from "../../components/loader/Loader"
import './UseEffect.scss'

interface IProduct {
  id: string
  title: string
  description: string
  image: string
}

const UseEffect: FC = (): ReactElement => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4')

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }

        const data: IProduct[] = await response.json()
        setProducts(data)
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        console.error(message)
        setError('Something went wrong. Please try again later.')
      } finally {
        setTimeout(() => setLoading(false), 1000)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="product">
      <h1 className="product__title">useEffect</h1>
      <p className="product__description">
        <code>useEffect</code> lets you synchronize a component with an external
        system. Below, it fetches product data from an API on mount — handling
        loading, success, and error states.
      </p>

      {error && (
        <div className="error-wrapper">
          <span className="error">{error}</span>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <ul className="product__block">
          {products.map(({ id, title, description, image }) => (
            <li key={id} className="product__item">
              <h2 className="product__item-title">{title}</h2>
              <p className="product__item-description">{description}</p>
              <img className="product__item-image" src={image} alt={title} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UseEffect
