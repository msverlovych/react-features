/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactElement, useEffect, useState } from "react"
import './UseEffect.scss'

interface IProduct {
  id: string,
  title: string,
  description: string,
  image: string
}

const UseEffect: FC = (): ReactElement => {
  const [ products, setProducts ] = useState<IProduct[]>([])
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)

  // const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4', { method: 'GET' })
        const data: IProduct[] = await response.json() 
        setProducts(data)
      } catch (error: any) {
        console.error(error);
        setError('Something wend wrong. Please try again later.')
      } finally {
        setTimeout(() => setLoading(false), 1000)
      }
    }

    fetchData()
  }, [])

  const loadingWrapper = (
    <div className='loading-wrapper'>
      <span className='loading'>LOADING...⏳</span>
    </div>
  )

  const errorWrapper = (
    <div className='error-wrapper'>
      <span className='error'>{error || 'Some error happened...'}</span>
    </div>
  )

  return (
    <section className="product">
      <h1 className='product__title'>Use Effect 🎇</h1>
      {/* {!loading && (
        <div className="product__interval">
          <span className="product__interval-text">{count}</span>
        </div>
      )} */}
      {/* <div style={{ padding: "1rem" }}>
        <button style={{ color: "#000" }} onClick={() => setCount(prev => prev + 1)}>Increment</button>
      </div> */}
      {!!error && errorWrapper}
      {!loading ? (
        <ul className='product__block'>
          {products.map(({ id, title, description, image }) => (
            <li key={id} className='product__item'>
              <h2 className='product__item-title'>{title}</h2>
              <p className='product__item-description'>{description}</p>
              <img className='product__item-image' src={image} alt="product" />
            </li>
          ))}
        </ul>
      ) : loadingWrapper}
    </section>
  )
}

export default UseEffect