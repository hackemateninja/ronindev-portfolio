import { fadeIn } from "@/variants";
import { motion } from 'framer-motion';
import JSConfetti from 'js-confetti';
import Head from "next/head";
import { useForm } from 'react-hook-form';


const Contact = () => {

	const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data: any) => {
		const jsConfetti = new JSConfetti()
		const request = await fetch('/api/hello', {method: 'POST', body: JSON.stringify(data)})
		if (request.status !== 200) {
			jsConfetti.addConfetti({
   			emojis: ['❌', '🥲'],
			})
			reset()
		}

		jsConfetti.addConfetti({
   		emojis: ['🎉', '🔥'],
		})
		reset()
	};

	
  return (
		<>
			<Head>
				<title>Ronindev Contact - Elixir developer</title>
			</Head>
			<div className='h-full bg-primary/30'>
				<div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
					<div className='flex flex-col w-full max-w-[700px]'>
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden' 
							className="h2 text-center mb-12">
							Let´s <span className="text-accent">connect.</span>
						</motion.h2>
						<motion.form
							onSubmit={handleSubmit(onSubmit)}
							variants={fadeIn('up', 0.4)}
							initial='hidden'
							animate='show'
							exit='hidden' 
							className="flex-1 flex flex-col gap-6 w-full mx-auto">
							<div className="flex gap-x-6 w-full">
								<input className="input" type="text" required placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
								<input className="input" type="email" required placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
							</div>
							<input className="input" type="text" required placeholder="Subject" {...register("Subject", {required: true})} />
							<textarea className="textarea" required placeholder="Message" {...register("Message", {required: true, maxLength: 250})} />
							<input type="submit" value="Let´s talk!" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300
							flex items-center justify-center overflow-hidden hover:border-accent group"/>
						</motion.form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
