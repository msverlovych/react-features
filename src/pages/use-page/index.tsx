import { FC, ReactElement, useEffect, useState } from 'react'
// import ErrorBoundary from '../../components/ErrorBoundary'
import './UsePage.scss'

interface IProduct {
  id: string,
  title: string,
  description: string,
  image: string
}

// const Product: FC<{ getData: Promise<IProduct[]> }> = ({ getData }): ReactElement => {
//   const products = use(getData);

//   return (
//     <ul className='product__block'>
//       {products.map(({ id, title, description, image }) => (
//         <li key={id} className='product__item'>
//           <h2 className='product__item-title'>{title}</h2>
//           <p className='product__item-description'>{description}</p>
//           <img className='product__item-image' src={image} alt="product" />
//         </li>
//       ))}
//     </ul>
//   )
// }

const UsePage: FC = (): ReactElement => {
  const [ products, setProducts ] = useState<IProduct[] | []>([])
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=4', { method: 'GET' })
        const data: IProduct[] = await response.json() 
        setProducts(data)
        setTimeout(() => setLoading(false), 1000)
      } catch (error) {
        setError('Something went wrong. Please try again later!')
        setLoading(false)
        console.log(error);
      }
    }

    fetchData()
  }, [])

  // const getData = async () => {
  //   try {
  //     const response = await fetch('https://fakestoreapi.com/products?limit=4', { method: 'GET' })
  //     return response.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const loadingWrapper = (
    <div className='loading-wrapper'>
      <span className='loading'>LOADING...</span>
    </div>
  )

  const errorWrapper = (
    <div className='error-wrapper'>
      <span className='error'>Something went wrong. Please try again later!</span>
    </div>
  )

  return (
    <section className="product">
      <h1 className='product__title'>USE PAGE</h1>
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
      {/* <ErrorBoundary fallback={errorWrapper}>
        <Suspense fallback={loadingWrapper}>
          <Product getData={getData()} />
        </Suspense>
      </ErrorBoundary> */}
    </section>
  )
}

export default UsePage