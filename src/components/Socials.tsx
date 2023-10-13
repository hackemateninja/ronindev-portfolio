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
			<Link aria-label="Blog" href={'https://blog.ronindev.ninja/'} className="hover:text-accent transition-all duration-300">
				<SiGhost />
			</Link>
			<Link aria-label="Youtube"  href={'https://www.youtube.com/@ronindevninja'} className="hover:text-accent transition-all duration-300">
				<RiYoutubeLine />
			</Link>
			<Link aria-label="Threads"  href={'https://www.threads.net/@ronindevninja'} className="hover:text-accent transition-all duration-300">
				<RiInstagramLine />
			</Link>
			<Link aria-label="Linkdin"  href={'https://www.linkedin.com/in/hackemate/'} className="hover:text-accent transition-all duration-300">
				<RiLinkedinLine />
			</Link>
			<Link aria-label="X"  href={'https://twitter.com/Hackemateninja'} className="hover:text-accent transition-all duration-300">
				<RiTwitterLine />
			</Link>
			<Link aria-label="Github"  href={'https://github.com/hackemateninja'} className="hover:text-accent transition-all duration-300">
				<RiGithubLine />
			</Link>
			<Link aria-label="StackOverflow"  href={'https://stackoverflow.com/users/6427944/hackemate'} className="hover:text-accent transition-all duration-300">
				<RiStackOverflowLine />
			</Link>
			<Link aria-label="TikTok"  href={'https://www.tiktok.com/@ronindevninja'} className="hover:text-accent transition-all duration-300">
				<RiTiktokLine />
			</Link>
			
		</div>
	);
};

export default Socials;
