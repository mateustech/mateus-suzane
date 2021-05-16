import 'tailwindcss/tailwind.css'
import {MaterialThemeProvider} from '../MaterialThemeProvider'
function MyApp({ Component, pageProps }) {
  return (
      // <MaterialThemeProvider>
        <Component {...pageProps} />
      // </MaterialThemeProvider>
  )
}

export default MyApp
