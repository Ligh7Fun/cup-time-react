import { useCart } from '../context/CartContext'
import products from '../products.data'
import CartItem from './CartItem'
import SkeletonLoader from './SkeletonLoader'

function Cart() {
	const { cart } = useCart()
	const totalPrice = cart
		? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
		: 0

	return (
		<section className='cart'>
			<div className='container cart__container'>
				<h2 className='cart__title'>Корзина ({cart ? cart.length : 0})</h2>
				{cart ? cart.length === 0 && <p>Ваша корзина пока пуста</p> : null}
				<ul className='cart__items'>
					{cart ? (
						cart.map(product => <CartItem key={product.id} {...product} />)
					) : (
						<SkeletonLoader />
					)}
				</ul>
				<div className='cart__summary'>
					<p className='cart__summary-title'>Итого:</p>
					<p className='cart__total'>{totalPrice}&nbsp;₽</p>
					<button className='cart__order-button'>Заказать</button>
				</div>
			</div>
		</section>
	)
}

export default Cart
