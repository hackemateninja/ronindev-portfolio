import { Head, Html, Main, NextScript } from 'next/document'

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
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
