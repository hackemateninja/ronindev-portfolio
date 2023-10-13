import Image from "next/image";

const Bulb = () => {
  return (
		<div className="bulb">
			<Image 
				src="/bulb.webp"
				width={260}
				height={260}
				className="w-full h-full"
				alt="bulb"
			/>
		</div>
	);
};

export default Bulb;
