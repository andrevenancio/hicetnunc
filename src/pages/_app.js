import { Head } from 'next/document'
import { Application } from '../components/application'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Application>
        <Component {...pageProps} />
      </Application>
    </>
  )
}
