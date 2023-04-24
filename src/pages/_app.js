import "@/styles/normalize.css";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { ThemeContextProvider } from "@/context/theme";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </main>
  );
}
