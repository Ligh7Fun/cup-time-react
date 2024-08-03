import ContentLoader from 'react-content-loader'

function SkeletonLoader({ count = 6 }) {
	return (
		<>
			{Array(count)
				.fill(null)
				.map((_, index) => (
					<div key={index} className='skeleton-wrapper'>
						<ContentLoader
							speed={2}
							viewBox='0 0 420 600'
							backgroundColor='#f2f9f7'
							foregroundColor='var(--primary-color)'
						>
							<rect x='0' y='0' rx='6' ry='6' width='100%' height='70%' />
							<rect
								x='24'
								y='calc(70% + 30px)'
								rx='6'
								ry='6'
								width='60%'
								height='30px'
							/>
							<rect
								x='24'
								y='calc(70% + 80px)'
								rx='6'
								ry='6'
								width='40%'
								height='25px'
							/>
						</ContentLoader>
					</div>
				))}
		</>
	)
}

export default SkeletonLoader
