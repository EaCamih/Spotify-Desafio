import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PlayerProvider } from '../src/context/PlayerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Component {...pageProps} />
    </PlayerProvider>
  )
}

export default MyApp
