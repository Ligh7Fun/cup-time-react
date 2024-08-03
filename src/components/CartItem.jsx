import { useEffect, useState } from 'react'
import { API_URL } from '../const'
import { useCart } from '../context/CartContext'

function CartItem({ id, title, img, price, quantity }) {
	const { updateQuantity, removeFromCart } = useCart()

	const [itemQuantity, setItemQuantity] = useState(quantity)

	const handleDecreaseQuantity = () => {
		const newQuantity = itemQuantity - 1
		if (newQuantity > 0) {
			setItemQuantity(newQuantity)
			updateQuantity(id, newQuantity)
		} else {
			removeFromCart(id)
		}
	}
	const handleIncreaseQuantity = () => {
		const newQuantity = itemQuantity + 1
		setItemQuantity(newQuantity)
		updateQuantity(id, newQuantity)
	}

	return (
		<li className='cart-item'>
			<img src={`${API_URL}${img}`} alt={title} className='cart-item__image' />
			<div className='cart-item__info'>
				<h3 className='cart-item__title'>{title}</h3>
				<div className='cart-item__quantity'>
					<button
						className='cart-item__quantity-button minus'
						onClick={handleDecreaseQuantity}
					></button>
					<input
						type='number'
						value={quantity}
						readOnly
						className='cart-item__quantity-input'
					/>
					<button
						className='cart-item__quantity-button plus'
						onClick={handleIncreaseQuantity}
					></button>
				</div>
				<p className='cart-item__price'>{price * quantity}&nbsp;₽</p>
			</div>
		</li>
	)
}

export default CartItem
