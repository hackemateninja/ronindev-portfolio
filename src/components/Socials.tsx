import Link from "next/link";
import {
	RiGithubLine,
	RiInstagramLine,
	RiLinkedinLine,
	RiStackOverflowLine,
	RiTiktokLine,
	RiTwitterLine,
	RiYoutubeLine
} from 'react-icons/ri';

import {
	SiGhost
} from "react-icons/si";

const Socials = () => {
  return (
		<div className="flex items-center gap-x-5 text-lg">
			<Link href={'https://blog.ronindev.ninja/'} className="hover:text-accent transition-all duration-300">
				<SiGhost />
			</Link>
			<Link href={'https://www.youtube.com/@ronindevninja'} className="hover:text-accent transition-all duration-300">
				<RiYoutubeLine />
			</Link>
			<Link href={'https://www.threads.net/@ronindevninja'} className="hover:text-accent transition-all duration-300">
				<RiInstagramLine />
			</Link>
			<Link href={'https://www.linkedin.com/in/hackemate/'} className="hover:text-accent transition-all duration-300">
				<RiLinkedinLine />
			</Link>
			<Link href={'https://twitter.com/Hackemateninja'} className="hover:text-accent transition-all duration-300">
				<RiTwitterLine />
			</Link>
			<Link href={'https://github.com/hackemateninja'} className="hover:text-accent transition-all duration-300">
				<RiGithubLine />
			</Link>
			<Link href={'https://stackoverflow.com/users/6427944/hackemate'} className="hover:text-accent transition-all duration-300">
				<RiStackOverflowLine />
			</Link>
			<Link href={'https://www.tiktok.com/@ronindevninja'} className="hover:text-accent transition-all duration-300">
				<RiTiktokLine />
			</Link>
			
		</div>
	);
};

export default Socials;
