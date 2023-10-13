import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
		<div className="bg-primary/60 h-full">
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
					<motion.h1 
						variants={fadeIn('down', 0.2)} 
						initial='hidden' 
						animate='show' 
						exit='hidden'
						className="h1">
						Transforming Code <br /> Into{' '} 
						<span className="text-accent">Pieces of art.</span>
					</motion.h1>
					<motion.p
						variants={fadeIn('down', 0.3)} 
						initial='hidden' 
						animate='show' 
						exit='hidden'
						className="max-w-sm xl:max-w-xl mx-auto xl:auto xl:mx-0 mb-10 xl:mb-16">
						An experienced Frontend Developer dedicated to crafting high-performance web applications. 
						With a passion for Elixir, I embrace elegant solutions and aim to push the boundaries of web development, 
						transforming digital ideas into exceptional user experiences.
					</motion.p>
					<div className="flex justify-center xl:hidden relative">
						<ProjectsBtn />
					</div>
					<motion.div 
						variants={fadeIn('down', 0.4)} 
						initial='hidden' 
						animate='show' 
						exit='hidden'
						className="hidden xl:flex">
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>
			<div className="w-[1200px] h-full absolute right-0 bottom-0">
				<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full 
					absolute mix-blend-color-dodge translate-z-0">
				</div>
				<ParticlesContainer />
				<motion.div
					variants={fadeIn('up', 0.5)} 
					initial='hidden' 
					animate='show' 
					exit='hidden' 
					className="w-full h-full max-w-[737px] max-h-[678px] 
					absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
					<Avatar />
				</motion.div>
			</div>
		</div>
  )
}
