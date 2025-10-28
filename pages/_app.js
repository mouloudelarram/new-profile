import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Software Engineer & Digital Architect — Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
