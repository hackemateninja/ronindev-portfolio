import { Swiper, SwiperSlide } from 'swiper/react'

import { FreeMode, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import Link from 'next/link'


// icons
import {
	RxArrowTopRight,
	RxCrop,
	RxDesktop,
	RxMobile,
	RxPencil2,
	RxRocket
} from "react-icons/rx"


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Frontend',
    description: 'Creation of beauty web experiences with most newest technologies.',
  },
  {
    icon: <RxDesktop />,
    title: 'Backend',
    description: 'Creation of powerful realtime services for your product.',
  },
  {
    icon: <RxMobile />,
    title: 'Mobile',
    description: 'Creation of apps that break the boundaries of your product.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Document writing',
    description: 'Bloggin for your product, company or your tech.',
  },
  {
    icon: <RxRocket />,
    title: 'Technological advice',
    description: 'Training and classes for your team of programmers.',
  },
];

const ServiceSlider = () => {
  return (
		<Swiper 
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 15
				}
			}}
			freeMode={true}
			pagination={{clickable: true}}
			modules={[FreeMode, Pagination]}
			className='h-[240px] sm:h-[340px]'
		>
			{serviceData.map((item, index) => (
				<SwiperSlide key={index}>
					<Link href="/contact" >
						<div className='bg-[rgba(65,47,123,0.15)] max-h-[275px] rounded-lg 
					px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-grab 
					hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300'>
						<div className="text-4xl text-accent mb-4">{item.icon}</div>
						<div className='mb-8'>
							<div className='mb-2 text-lg'>{item.title}</div>
							<p className='max-w-[350px] leading-normal'>{item.description}</p>
						</div>
						<div className='text-3xl'>
							<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
						</div>
					</div>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServiceSlider;
