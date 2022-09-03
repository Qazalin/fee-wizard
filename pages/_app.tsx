import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/poppins";
import "@fontsource/open-sans";
import "@fontsource/inconsolata";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" forcedTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
