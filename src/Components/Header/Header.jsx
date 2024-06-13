import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<header className='text-gray-400 bg-gray-900 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				
					<NavLink to={"/"} className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
						{/*  */}

						<span className='ml-3 text-xl cursor-pointer'>
							Bharat <span className='text-orange-500'>Movers</span>
						</span>
					</NavLink>
				
				<nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
					<NavLink to={'/error'} className='mr-5 hover:text-white cursor-pointer'>For Enterprise</NavLink>
					<NavLink to={'/error'} className='mr-5 hover:text-white cursor-pointer'>
						Delivery Partners
					</NavLink>
					<NavLink to={'/help'} className='mr-5 hover:text-white cursor-pointer'>Support</NavLink>
				</nav>
				<NavLink to={'Signup'}>
				<button className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'>
					Sign Up
				</button>
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
