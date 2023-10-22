// icons
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { useState } from "react";
import {
	FaCss3,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";

import {
	SiCsharp,
	SiElixir,
	SiErlang,
	SiFsharp,
	SiGodotengine,
	SiKotlin,
	SiMonogame,
	SiNextdotjs,
	SiPhoenixframework,
	SiSwift,
	SiThreedotjs,
} from "react-icons/si";

import Head from "next/head";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
				stage: '',
        icons: [
          <FaHtml5 key={0} />,
          <FaCss3 key={1} />,
					<SiThreedotjs key={2} />,
          <FaJs key={3} />,
          <FaReact key={4}/>,
          <SiNextdotjs key={5}/>,
        ],
      },
      {
        title: 'Backend Development',
				stage: '',
        icons: [<SiElixir key={0} />, <SiErlang key={1} />, <SiPhoenixframework key={2} />, <FaNodeJs key={3} />],
      },
			{
        title: 'Mobile Development',
				stage: '',
        icons: [<SiPhoenixframework key={0} />, <SiKotlin key={1} />, <SiSwift key={2} />, <FaReact key={3} />],
      },
			{
        title: 'Game & Desktop development',
				stage: '',
        icons: [<SiFsharp key={0} />, <SiCsharp key={1} />, <SiGodotengine key={2} />, <SiMonogame key={3} />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Developer of the month - Autoweb',
        stage: '2021 - 2022',
				icons: []
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Elixir Developer - BushidoLabs LLC',
        stage: 'Dec 2022 - Present',
				icons: []
      },
      {
        title: 'React Developer - Agrotoken',
        stage: 'Apr 2022 - Nov 2022',
				icons: []
      },
      {
        title: 'UX-UI Developer - Autoweb',
        stage: 'Mar 2021 - Apr 2022',
				icons: []
      },
			{
        title: 'React Native Advisor - Puzzle',
        stage: 'Jan 2021 - Oct 2021',
				icons: []
      },
			{
        title: 'React Native developer - Habits.IA',
        stage: 'May 2020 - Oct 2020',
				icons: []
      },
			{
        title: 'Frontend developer - Geeksyte',
        stage: 'Nov 2018 - Dic 2019',
				icons: []
      },
			{
        title: 'Frontend Developer - Salomondrin',
        stage: 'Feb 2017 - Jun 2018',
				icons: []
      },
			{
        title: 'Freelance Frontend Developer - Self Employee',
        stage: 'Jan 2011 - Jan 2016',
				icons: []
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Elixir Developer - Pragmatic Studio',
        stage: '2022 - Present',
				icons: []
      },
			{
        title: 'C#, F#, WPF Path - Pluralsight',
        stage: '2022 - 2023',
				icons: []
      },
      {
        title: 'Frontend Developer Expert - Frontend Masters',
        stage: '2016 - 2019',
				icons: []
      },
			{
        title: 'Node.js Developer Path - Pluralsight',
        stage: '2015 - 2016',
				icons: []
      },
      {
        title: 'Systems Engineering - Universidad Mariano Gálvez',
        stage: '2014 - 2016',
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
		<>
			<Head>
				<title>Ronindev About - Elixir developer</title>
			</Head>
			<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />
			<motion.div 
				variants={fadeIn('right', 0.2)} 
				initial="hidden"
				animate="show"
				exit="hidden" 
				className="hidden xl:flex absolute bottom-0 -left-[300px]">
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
						Developing <span className="text-accent">code</span> bringing ideas to life.
					</motion.h2>
					<motion.p
						variants={fadeIn('right', 0.4)} 
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
							Cultivating my career over a decade, I´m Herman Morales, a frontend and mobile developer with a fervor for Elixir development. 
							I´ve freelanced, consulted for startups, and co-authored digital solutions for diverse clients.
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
									<CountUp start={0} end={10} duration={5}/> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
							</div>
							{/* clients */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 
							after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={12} duration={5}/> +
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
		</>
		
	);
};

export default About;
