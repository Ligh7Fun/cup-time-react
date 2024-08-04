import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useProducts } from '../context/ProductContext'

function Header() {
	const { cart } = useCart()
	const { categories } = useProducts()
	const location = useLocation()
	const getActiveClass = category => {
		const currentCategory = new URLSearchParams(location.search).get('category')
		return currentCategory === category ? 'active' : ''
	}

	return (
		<>
			<header className='header'>
				<div className='container header__container'>
					<Link to='/' className='header__logo-link'>
						<img
							className='header__logo'
							src='./image/logo.svg'
							alt='Логотип Cup Time'
						/>
					</Link>

					<nav className='header__nav'>
						<ul className='header__menu'>
							{Object.entries(categories).map(([key, value]) => (
								<li className='header__menu-item' key={key}>
									<Link
										to={`/products?category=${key}`}
										className={`header__menu-link ${getActiveClass(key)}`}
									>
										{value}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<Link to='/cart' className='header__cart-link'>
						{/* {cart ? cart.length : 0} */}
						{cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0}
					</Link>
				</div>
			</header>
		</>
	)
}

export default Header
