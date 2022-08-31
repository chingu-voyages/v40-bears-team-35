import '../styles/globals.css'
import UserWrapper from './context/UserWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <UserWrapper>
      <Component {...pageProps} />
    </UserWrapper>)
}

export default MyApp
