import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
