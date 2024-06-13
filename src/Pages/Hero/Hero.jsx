import React from "react";
import truck from "/src/assets/Truck.png";
import minitruck from "/src/assets/mini-truck.jpg";
import bike from "/src/assets/bike.jpg";
import { Link } from "react-router-dom";
import maintruck from "/src/assets/background.jpg";
const Hero = () => {
	return (
		<>
			<div class='bg-white pb-6 sm:pb-8 lg:pb-12 mt-9'>
				<div class='mx-auto max-w-screen-2xl px-4 md:px-8'>
					<section class='min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48'>
						<img
							src={maintruck}
							loading='lazy'
							alt='Photo by Fakurian Design'
							class='absolute inset-0 h-full w-full object-cover object-center'
						/>

						<div class='relative flex flex-col items-center p-4 sm:max-w-xl'>
							<p class='mb-4 text-center text-lg text-black font-semibold sm:text-xl md:mb-8'>
								Very proud to introduce
							</p>
							<h1 class='mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl'>
								Revolutionary way to Shift your belongings
							</h1>

							<div class='flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center'>
								<a
									href='#'
									class='inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base'
								>
									Scroll down 
								</a>

								
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className='bg-white py-6 sm:py-8 lg:py-12'>
				<div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
					<div className='mb-10 md:mb-16'>
						<h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
							Services
						</h2>
					</div>

					<div className='grid gap-6 sm:grid-cols-3'>
						<a
							href='#'
							className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
						>
							<img
								src={truck}
								loading='lazy'
								alt='Photo by Fakurian Design'
								className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110'
							/>
							<Link
								to={"/error"}
								className='relative flex w-full flex-col rounded-lg bg-white p-4 text-center hover:bg-slate-100'
							>
								<span className='text-gray-500'>Hire</span>
								<span className='text-lg font-bold text-gray-800 lg:text-xl'>
									Truck
								</span>
							</Link>
						</a>

						<a
							href='#'
							className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
						>
							<img
								src={minitruck}
								loading='lazy'
								alt='Photo by Fakurian Design'
								className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110'
							/>
							<Link
								to={"/error"}
								className='relative flex w-full flex-col rounded-lg bg-white p-4 text-center hover:bg-slate-100'
							>
								<span className='text-gray-500'>Hire</span>
								<span className='text-lg font-bold text-gray-800 lg:text-xl'>
									Mini Truck{" "}
								</span>
							</Link>
						</a>
						<a
							href='#'
							className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
						>
							<img
								src={bike}
								loading='lazy'
								alt='Photo by Fakurian Design'
								className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 hover:scale-110'
							/>
							<Link
								to={"/error"}
								className='relative flex w-full flex-col rounded-lg bg-white p-4 text-center hover:bg-slate-100'
							>
								<span className='text-gray-500'>Hire</span>
								<span className='text-lg font-bold text-gray-800 lg:text-xl'>
									Two wheelers{" "}
								</span>
							</Link>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
