import Product from './Product'
// import products from '../products.data'
import { useEffect } from 'react'
import { useProducts } from '../context/ProductContext'
import { useSearchParams } from 'react-router-dom'
import SkeletonLoader from './SkeletonLoader'

function Products() {
	const [searchParams] = useSearchParams()
	const { products, setCategory } = useProducts()
	const category = searchParams.get('category')
	const titleCategory = {
		tea: 'Чай',
		coffee: 'Кофе',
		teapots: 'Чайники',
		cezves: 'Турки',
		other: 'Прочее',
	}
	useEffect(() => {
		setCategory(category)
	}, [category, setCategory])
	return (
		<>
			<section className='products'>
				<div className='container'>
					<h2 className='products__title'>{titleCategory[category]}</h2>

					<ul className='products__list'>
						{products.length ? (
							products.map(product => (
								<Product key={product.id} data={product} />
							))
						) : (
							<SkeletonLoader />
						)}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Products
