import "@/styles/normalize.css";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ 
  weight: ['300', '400', '700'],
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
