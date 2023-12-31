import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Head from "next/head";



const Work = () => {
  return (
		<>
			<Head>
				<title>Ronindev Work - Elixir developer</title>
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
								className="h2 xl:mt-12">
								My work <span className="text-accent">.</span>
							</motion.h2>
							<motion.p
								variants={fadeIn('up', 0.4)}
								initial='hidden'
								animate='show'
								exit='hidden'  
								className="mb-4 max-w-[400px] mx-auto lg:mx-0">
								These are my most recent projects, which I have done in collaboration and some are personal projects.
								Click on each one to see them live.
							</motion.p>
						</div>
						<motion.div
							variants={fadeIn('down', 0.6)}
							initial='hidden'
							animate='show'
							exit='hidden'  
							className="w-full xl:max-w-[65%]">
							{/* slider */}
							<WorkSlider />
						</motion.div>
					</div>
				</div>
				<Bulb />
			</div>
		</>
	);
};

export default Work;
