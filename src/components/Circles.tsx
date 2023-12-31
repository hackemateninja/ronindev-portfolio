import Image from 'next/image';

const Circles = () => {
  return (
		<div className='circles'>
			<Image 
				src={'/circles.webp'}
				width={260}
				height={200}
				className='w-full h-full'
				alt=''
			/>
		</div>
	);
};

export default Circles;
