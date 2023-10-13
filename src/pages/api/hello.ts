// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

type Data = {
  name: string
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	 const { Name, Email, Subject, Message } = JSON.parse(req.body);

		try {
			const data = await resend.emails.send({
				from: "Ronindev <onboarding@resend.dev>",
				to: "nitrowitty@gmail.com",
				reply_to: `${Email}`,
				subject: `Contact from: ${Name}, about ${Subject}`,
				html: `<p>${Message}</p>`,
			});
			res.status(200).end(`${data}`);
		} catch (error) {
			res.status(400).end(`${error}`);
		}
}
