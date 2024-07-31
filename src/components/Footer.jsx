function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='container footer__container'>
					<a className='footer__logo-link'>
						<img
							src='./image/logo.svg'
							alt='Логотип Cup Time'
							className='footer__logo'
						/>
					</a>
					<div className='footer__nav'>
						<ul className='footer__menu'>
							<li className='header__menu-item'>
								<a href='#' className='footer__menu-link'>
									Чай
								</a>
							</li>
							<li className='footer__menu-item'>
								<a href='#' className='footer__menu-link'>
									Кофе
								</a>
							</li>
							<li className='footer__menu-item'>
								<a href='#' className='footer__menu-link'>
									Чайники
								</a>
							</li>
							<li className='footer__menu-item'>
								<a href='#' className='footer__menu-link'>
									Турки
								</a>
							</li>
							<li className='footer__menu-item'>
								<a href='#' className='footer__menu-link'>
									Прочее
								</a>
							</li>
						</ul>
					</div>

					<div className='footer__info'>
						<p className='footer__copyright'>©CUPTIME, 2024</p>
						<p className='footer__description'>Проект сделан в учебных целях</p>
						<ul className='footer__devs'>
							<li className='footer__dev'>
								Designer:{' '}
								<a href='#' className='footer__dev-link'>
									Anastasia Ilina
								</a>
							</li>
							<li className='footer__dev'>
								Developer:{' '}
								<a href='#' className='footer__dev-link'>
									Tsybin Denis
								</a>
							</li>
						</ul>
					</div>
					<div className='footer__contacts'>
						<a href='mailto:m5221710@gmail.com' className='footer__email'>
							m5221710@gmail.com
						</a>
						<ul className='footer__social'>
							<li className='footer__social_item'>
								<a href='#' className='footer__social-link'>
									<img src='./image/tg.svg' alt='Telegram' />
								</a>
							</li>
							<li className='footer__social_item'>
								<a href='#' className='footer__social-link'>
									<img src='./image/yt.svg' alt='YouTube' />
								</a>
							</li>
							<li className='footer__social_item'>
								<a href='#' className='footer__social-link'>
									<img src='./image/vk.svg' alt='VK' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
