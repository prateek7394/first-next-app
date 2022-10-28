import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // Here Component refers to component function defined in index.js file
  return <Component {...pageProps} />
}

export default MyApp
