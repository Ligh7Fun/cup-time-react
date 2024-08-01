function CartItem({ title, image, price }) {
	return (
		<li className='cart-item'>
			<img src={image} alt={title} className='cart-item__image' />
			<div className='cart-item__info'>
				<h3 className='cart-item__title'>{title}</h3>
				<div className='cart-item__quantity'>
					<button className='cart-item__quantity-button minus'></button>
					<input
						type='number'
						value='1'
						className='cart-item__quantity-input'
					/>
					<button className='cart-item__quantity-button plus'></button>
				</div>
				<p className='cart-item__price'>{price}&nbsp;₽</p>
			</div>
		</li>
	)
}

export default CartItem
