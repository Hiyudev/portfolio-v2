import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";
import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider enableSystem attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
