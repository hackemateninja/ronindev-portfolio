import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<meta property="twitter:image" content="https://www.ronindev.ninja/_next/image?url=%2Fpreviewpage.jpeg&w=1080&q=75" />
				<meta property="twitter:card" content="https://www.ronindev.ninja/_next/image?url=%2Fpreviewpage.jpeg&w=1080&q=75" />
				<meta property="twitter:title" content="Ronindev Elixir developer Portfolio" />
				<meta property="twitter:description" content="Frontend developer, passionate about Elixir and Phoenix portfolio"/>
				<meta name="description" content='Frontend developer, passionate about Elixir and Phoenix portfolio' />
				<meta property="description" content="Frontend developer, passionate about Elixir and Phoenix portfolio" />
				<meta property="og:image" content="https://www.ronindev.ninja/_next/image?url=%2Fpreviewpage.jpeg&w=1080&q=75" />
				<meta property="og:title" content="Ronindev Elixir developer Portfolio" />
				<meta property="og:description" content="Frontend developer, passionate about Elixir and Phoenix portfolio" />
				<meta property="og:url" content="https://ronindev.ninja" />
			</Head>
			
      <body>
				<Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-5V62HRZ133');
        `}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5V62HRZ133" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
