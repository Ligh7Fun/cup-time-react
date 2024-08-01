import { Link } from 'react-router-dom'

function Header() {
	return (
		<>
			<header className='header'>
				<div className='container header__container'>
					<Link to='/' className='header__logo-link'>
						<img
							className='header__logo'
							src='./image/logo.svg'
							alt='Логотип Cup Time'
						/>
					</Link>

					<nav className='header__nav'>
						<ul className='header__menu'>
							<li className='header__menu-item'>
								<a href='#' className='header__menu-link'>
									Чай
								</a>
							</li>
							<li className='header__menu-item'>
								<a href='#' className='header__menu-link'>
									Кофе
								</a>
							</li>
							<li className='header__menu-item'>
								<a href='#' className='header__menu-link'>
									Чайники
								</a>
							</li>
							<li className='header__menu-item'>
								<a href='#' className='header__menu-link'>
									Турки
								</a>
							</li>
							<li className='header__menu-item'>
								<a href='#' className='header__menu-link'>
									Прочее
								</a>
							</li>
						</ul>
					</nav>
					<div className='mobile'>
						<Link to='/cart' className='header__cart-link'>
							6
						</Link>
						<button href='#' className='header__mobile-menu'></button>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
