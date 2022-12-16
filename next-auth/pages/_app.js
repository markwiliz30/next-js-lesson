import { SessionProvider } from 'next-auth/react'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'

function MyApp({ Component, pageProps }) {
  return(
    // add get the 'session' properties inside every getServerSideProps() 
    <SessionProvider session = {pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </ SessionProvider>
  ) 
}

export default MyApp
