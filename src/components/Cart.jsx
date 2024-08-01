import products from '../products.data'
import CartItem from './CartItem'

function Cart() {
	return (
		<section className='cart'>
			<div className='container cart__container'>
				<h2 className='cart__title'>Корзина (6)</h2>

				<ul className='cart__items'>
					{products.map(product => (
						<CartItem key={product.id} {...product} />
					))}
				</ul>
				<div className='cart__summary'>
					<p className='cart__summary-title'>Итого:</p>
					<p className='cart__total'>2200&nbsp;₽</p>
					<button className='cart__order-button'>Заказать</button>
				</div>
			</div>
		</section>
	)
}

export default Cart
