import Modal from 'react-modal'
import { API_URL } from '../const'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		padding: '0',
		borderRadius: '8px',
		transform: 'translate(-50%, -50%)',
	},
}

Modal.setAppElement('#root')

function ProductModal({ isOpen, onRequestClose, data }) {
	const { addToCart } = useCart()

	const [quantity, setQuantity] = useState(1)

	if (!data) {
		return null
	}

	const handleAddToCart = () => {
		addToCart(data, quantity)
		onRequestClose()
		setQuantity(1)
	}
	const handleDecreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}
	const handleIncreaseQuantity = () => {
		setQuantity(quantity + 1)
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={customStyles}
			contentLabel='Product Modal'
		>
			<div className='modal-content'>
				<img
					src={`${API_URL}${data.img}`}
					alt={data.title}
					className='modal__image'
				/>
				<div className='modal__product'>
					<div className='modal__product-headling'>
						<h2 className='modal__product-title'>{data.title}</h2>
						<p className='modal__product-price'>{data.price}&nbsp;₽</p>
					</div>

					<ul className='modal__product-additional'>
						{Object.entries(data.additional).map(([key, value]) => (
							<li key={key} className='modal__product-additional-item'>
								<div className='modal__product-additional-key'>{key}</div>
								<div className='modal__product-additional-value'>{value}</div>
							</li>
						))}
					</ul>

					<div className='cart-item__quantity modal-quantity'>
						<button
							onClick={handleDecreaseQuantity}
							className='cart-item__quantity-button minus'
						></button>
						<input
							type='number'
							value={quantity}
							readOnly
							className='cart-item__quantity-input'
						/>
						<button
							onClick={handleIncreaseQuantity}
							className='cart-item__quantity-button plus'
						></button>
						<button onClick={handleAddToCart} className='cart__order-button'>
							Добавить
						</button>
					</div>
				</div>
				<button onClick={onRequestClose} className='modal__close'></button>
			</div>
		</Modal>
	)
}

export default ProductModal
