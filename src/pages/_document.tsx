import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<meta property="twitter:image" content="/previewpage.jpeg" />
				<meta property="twitter:card" content="/previewpage.jpeg"></meta>
				<meta property="twitter:title" content="Ronindev Elixir developer Portfolio"></meta>
				<meta property="twitter:description" content="Frontend developer, passionate about Elixir and Phoenix portfolio"></meta>
				<meta property="description" content="Frontend developer, passionate about Elixir and Phoenix portfolio" />
				<meta property="og:image" content="/previewpage.jpeg"></meta>
				<meta property="og:title" content="Ronindev Elixir developer Portfolio"></meta>
				<meta property="og:description" content="Frontend developer, passionate about Elixir and Phoenix portfolio" />
				<meta property="og:url" content="https://ronindev.ninja"></meta>
			</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
