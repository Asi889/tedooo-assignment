import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Context from "../context/context";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Context>
      <Component {...pageProps} />
    </Context>
    </>
  )
}

export default MyApp
