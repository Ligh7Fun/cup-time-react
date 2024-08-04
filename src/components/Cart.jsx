import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import SkeletonLoader from './SkeletonLoader'
import { useOrder } from '../context/OrderContext'
import { API_URL } from '../const'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function Cart() {
	const [orderStatus, setOrderStatus] = useState(null)
	const [orderId, setOrderId] = useState(null)
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const { cart, clearCart } = useCart()
	const { orderDetails, clearOrderDetails } = useOrder()

	const handleSubmit = async () => {
		const orderData = {
			...orderDetails,
			items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
		}

		try {
			const response = await fetch(`${API_URL}/api/orders`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderData),
			})

			if (!response.ok) {
				throw new Error('Не удалось создать заказ!')
			}

			const result = await response.json()
			setOrderStatus('success')
			setOrderId(result.order.id)
			clearCart()
			clearOrderDetails()
		} catch (error) {
			setOrderStatus('error')
			console.error('Error: ', error)
		} finally {
			setModalIsOpen(true)
		}
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

	const totalPrice = cart
		? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
		: 0

	return (
		<section className='cart'>
			<div className='container cart__container'>
				{/* <h2 className='cart__title'>Корзина ({cart ? cart.length : 0})</h2> */}
				<h2 className='cart__title'>
					Корзина (
					{cart ? cart.reduce((acc, item) => acc + item.quantity, 0) : 0})
				</h2>

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
					<button className='cart__order-button' onClick={handleSubmit}>
						Заказать
					</button>
				</div>
			</div>
			<Modal
				className='modal-cart'
				overlayClassName='modal-cart__overlay'
				onRequestClose={closeModal}
				isOpen={modalIsOpen}
			>
				<h2 className='modal-cart__title'>
					{orderStatus === 'success'
						? `Заказ успешно оформлен! Номер заказа: №${orderId}`
						: 'Произошла ошибка при отправке заказа!'}
				</h2>
				<button
					className='modal-cart__button'
					onClick={closeModal}
					type='button'
				>
					Закрыть
				</button>
			</Modal>
		</section>
	)
}

export default Cart
