function Order() {
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
					/>
					<input
						type='text'
						placeholder='Телефон'
						name='phone'
						className='order__input'
					/>
					<input
						type='text'
						placeholder='Адрес'
						name='address'
						className='order__input order__input_address'
					/>
					<fieldset className='order__payment'>
						<legend className='order__payment-title'>Оплата:</legend>
						<label className='order__payment-label'>
							<input
								type='radio'
								name='payment'
								value='card'
								className='order__radio'
							/>
							Картой
						</label>

						<label className='order__payment-label'>
							<input
								type='radio'
								name='payment'
								value='cash'
								className='order__radio'
								defaultChecked
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
