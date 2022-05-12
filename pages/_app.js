import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Navigation/>
    <Component {...pageProps} />
    </ThemeProvider>
    <Footer />
    </>
}

export default MyApp