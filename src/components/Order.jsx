import { useOrder } from '../context/OrderContext'

function Order() {
	const { orderDetails, updateOrderDetails } = useOrder()

	const handleChange = e => {
		const { name, value } = e.target
		updateOrderDetails(name, value)
	}

	return (
		<section className='order'>
			<div className='container'>
				<h2 className='order__title'>Доставка</h2>
				<form className='order__form'>
					<input
						type='text'
						placeholder='Имя'
						name='name'
						className='order__input'
						value={orderDetails.name}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Телефон'
						name='phone'
						className='order__input'
						value={orderDetails.phone}
						onChange={handleChange}
					/>
					<input
						type='text'
						placeholder='Адрес'
						name='address'
						className='order__input order__input_address'
						value={orderDetails.address}
						onChange={handleChange}
					/>
					<fieldset className='order__payment'>
						<legend className='order__payment-title'>Оплата:</legend>
						<label className='order__payment-label'>
							<input
								type='radio'
								name='payment'
								value='card'
								className='order__radio'
								checked={orderDetails.payment === 'card'}
								onChange={handleChange}
							/>
							Картой
						</label>

						<label className='order__payment-label'>
							<input
								type='radio'
								name='payment'
								value='cash'
								className='order__radio'
								checked={orderDetails.payment === 'cash'}
								onChange={handleChange}
							/>
							Наличными
						</label>
					</fieldset>
				</form>
			</div>
		</section>
	)
}

export default Order
