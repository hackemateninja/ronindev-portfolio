
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper/modules'

import Image from 'next/image'

import { BsArrowRight } from 'react-icons/bs'

import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Bushido Labas',
          path: '/bushidolabs.jpeg',
					link: 'https://bushidolabs.dev/'
        },
        {
          title: 'Agrotoken',
          path: '/agrotoken.jpeg',
					link: 'https://agrotoken.com/'
        },
        {
          title: 'Carcom',
          path: '/carcom.jpeg',
					link: 'https://www.car.com/'
        },
        {
          title: 'UsedCars',
          path: '/usedcars.jpeg',
					link: 'https://www.usedcars.com/'
        },
      ],
    },
    
  ],
};


const WorkSlider = () => {
  return (
		<Swiper 
			spaceBetween={10}
			pagination={{clickable: true}}
			modules={[Pagination]}
			className='h-[280px] sm:h-[480px]'
		>
			{workSlides.slides.map((item, index) => (
				<SwiperSlide key={index}>
					<div className='grid grid-cols-2 grid-rows-2 gap-4'>
						{item.images.map((images, index) => (
							<div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
								<div className='flex items-center justify-center relative overflow-hidden group'>
									<Image src={images.path} alt={images.title} width={500} height={300} />
									<div className='absolute inset-0 cursor-pointer bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
									opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
									<div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
									group-hover:xl:-translate-y-20 transition-all duration-300'>
										<Link href={images.link} target='_blank'>
											<div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
											<div className='delay-100'>LIVE</div>
											<div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
												PROJECT
											</div>
											<div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
												<BsArrowRight />
											</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;