import Product from './Product'
// import products from '../products.data'
import { useEffect } from 'react'
import { useProducts } from '../context/ProductContext'
import { useSearchParams } from 'react-router-dom'

function Products() {
	const [searchParams] = useSearchParams()
	const { products, setCategory } = useProducts()
	const category = searchParams.get('category')
	useEffect(() => {
		setCategory(category)
	}, [category, setCategory])

	return (
		<>
			<section className='products'>
				<div className='container'>
					<h2 className='products__title'>Чай</h2>

					<ul className='products__list'>
						{products.map(product => (
							<Product key={product.id} data={product} />
						))}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Products
