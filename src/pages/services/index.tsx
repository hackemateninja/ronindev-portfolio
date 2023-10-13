import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Head from "next/head";


const Services = () => {
  return (
		<>
			<Head>
				<title>Ronindev Services - Elixir developer</title>
			</Head>
			<div className="h-full bg-primary/30 py-36 flex items-center">
				<Circles />
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row gap-x-8">
						{/* text */}
						<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
							<motion.h2
								variants={fadeIn('up', 0.2)}
								initial='hidden'
								animate='show'
								exit='hidden' 
								className="h2 xl:mt-8">
								My services <span className="text-accent">.</span>
							</motion.h2>
							<motion.p
								variants={fadeIn('up', 0.4)}
								initial='hidden'
								animate='show'
								exit='hidden'  
								className="mb-4 max-w-[400px] mx-auto lg:mx-0">
								These are all the services I offer, feel free to contact me so we can talk about your next project. 
							</motion.p>
						</div>
						<motion.div
							variants={fadeIn('down', 0.6)}
							initial='hidden'
							animate='show'
							exit='hidden'  
							className="w-full xl:max-w-[65%]">
							{/* slider */}
							<ServiceSlider />
						</motion.div>
					</div>
				</div>
				<Bulb />
			</div>
		</>
	);
};

export default Services;
