import React from "react";
import missionImage from '/src/assets/mission.jpg';
import vision1Image from '/src/assets/vision1.jpg'
import wwa from '/src/assets/wwa.jpeg'
const AboutUs = () => {
	return (
		<div>
			<section className='text-gray-600 body-font '>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
						<img
							className='object-cover object-center rounded'
							alt='hero'
							src={wwa}
						/>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							Who we are
							<br className='hidden lg:inline-block' />
						</h1>
						<p className='mb-8 leading-relaxed'>
							Bharat Movers is an innovative logistics and trucking transport
							startup, we are dedicated to revolutionising the logistics and
							trucking industry by delivering innovative solutions that drive
							efficiency, reliability. Bharat movers connects shippers and
							trackers at one platform. Shippers, businesses can book truck
							online at our platform for their cargo and goods. We have set out
							on a journey to transform the way goods are transported and
							managed.
						</p>
					</div>
				</div>
			</section>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							Our Vision
							<br className='hidden lg:inline-block' />
						</h1>
						<p className='mb-8 leading-relaxed'>
							Our vision is to be there preferred partner for shippers, carriers
							in business seeking seamless and sustainable logistics solution.
							We aspire to create a future where logistics operations are
							efficient, sustainable and responsive to the evolving needs of
							business in a rapidly changing world. After acquiring the national
							market our end vision is to create the world's greatest end to end
							transport and logistic platform and revolutionize the transport
							and logistics sector.
						</p>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<img
							className='object-cover object-center rounded'
							alt='hero'
							src={vision1Image}
						/>
					</div>
				</div>
			</section>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
						<img
							className='object-cover object-center rounded'
							alt='hero'
							src={missionImage}
						/>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							Our Mission
							<br className='hidden lg:inline-block' />
						</h1>
						<p className='mb-8 leading-relaxed'>
							Our mission is to simplify logistics challenges for businesses. We
							aim to provide efficient transportation options that empower
							businesses to drive in a rapidly evolving world. Our commitment is
							to provide excellence in service insuring customer satisfaction
							and building and enduring partnership based on trust and
							reliability. By providing seamless logistics solutions that
							empower businesses to focus on their core operations while
							trusting there transportation needs to us.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
