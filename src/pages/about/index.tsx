// icons
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { useState } from "react";
import {
	FaCss3,
	FaFigma,
	FaHtml5,
	FaJs,
	FaReact,
	FaWordpress
} from "react-icons/fa";

import {
	SiAdobephotoshop,
	SiAdobexd,
	SiFramer,
	SiNextdotjs,
} from "react-icons/si";

import CountUp from "react-countup";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
				stage: '',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
				stage: '',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
				icons: []
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
				icons: []
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
				icons: []
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
				icons: []
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
				icons: []
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
				icons: []
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
				icons: []
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
				icons: []
      },
    ],
  },
];

const About = () => {

	const [index, setIndex] = useState(0)
	const date = new Date()
	const year = date.getFullYear()

  return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />
			<motion.div 
				variants={fadeIn('right', 0.2)} 
				initial="hidden"
				animate="show"
				exit="hidden" 
				className="hidden xl:flex absolute bottom-0 -left-[368px]">
				<Avatar />
			</motion.div>
			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
				<div className="flex-1 flex flex-col justify-center">
					<motion.h2 
						variants={fadeIn('right', 0.2)} 
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="h2">
						Captiving <span className="text-accent">stories</span> birth 
						magnificient designs.
					</motion.h2>
					<motion.p
						variants={fadeIn('right', 0.4)} 
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
							10 years ago, I began freelancing as a developer. Since then, I have 
							done remote work for agencies, counsulted for starttups, and 
							collaborated on digital producst for business and consumer use.
					</motion.p>
					<motion.div 
						variants={fadeIn('right', 0.6)} 
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
						<div className="flex flex-1 xl:gap-x-6">
							{/* experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
							after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={year - 2011} duration={5}/> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
							</div>
							{/* clients */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
							after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={50} duration={5}/> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
							</div>
							{/* clients */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
							after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={75} duration={5}/> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
							</div>
							{/* clients */}
							<div className="relative flex-1">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={7} duration={5}/> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Programming languages</div>
							</div>
						</div>
					</motion.div>
				</div>
				<motion.div 
					variants={fadeIn('left', 0.4)} 
					initial="hidden"
					animate="show"
					exit="hidden" 
					className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{aboutData.map((item, key) => (
							<div 
								key={key} 
								className={
									`${index === key && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
									cursor-pointer capitalize xl:text-lg relative after:w-8 
									after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
								onClick={() => setIndex(key)}>
								{item.title}
							</div>
						))}
					</div>
					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
						{aboutData[index].info.map((item, itemIndex) => (
							<div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
								<div className="font-light mb-2 md:mb-0">{item.title}</div>
								<div className="hidden md:flex">-</div>
								<div>{item.stage}</div>
								<div className="flex gap-x-4">
									{item.icons.map((icon, itemIndex) => (
									<div key={itemIndex} className="text-2xl text-white">
										{icon}
									</div>
								))}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
