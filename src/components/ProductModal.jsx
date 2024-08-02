import Modal from 'react-modal'
import { API_URL } from '../const'

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
	if (!data) {
		return null
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
						<button className='cart-item__quantity-button minus'></button>
						<input
							type='number'
							value='1'
							className='cart-item__quantity-input'
						/>

						<button className='cart-item__quantity-button plus'></button>

						<button className='cart__order-button'>Добавить</button>
					</div>
				</div>
				<button onClick={onRequestClose} className='modal__close'></button>
			</div>
		</Modal>
	)
}

export default ProductModal
