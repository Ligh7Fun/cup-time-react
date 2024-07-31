function Product({ title, image, price }) {
	return (
		<>
			<li className='products__item'>
				<article className='product'>
					<img src={image} alt={title} className='product__image' />
					<div className='product__content'>
						<h3 className='product__title'>{title}</h3>
						<p className='product__price'>{price} ₽</p>
					</div>
				</article>
			</li>
		</>
	)
}

export default Product
