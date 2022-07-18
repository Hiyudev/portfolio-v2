import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { Warning } from "phosphor-react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Layout from "../components/layout";

const Error404Page: NextPage = () => {
  return (
    <>
      <Navbar />
      <Layout className="mt-20 flex flex-col">
        <h1 className="text-2xl font-bold">
          <Warning weight="bold" /> Oops! Page not found
        </h1>

        <p className="text-secondary">404 Error</p>

        <Link href="/" passHref>
          <a className="text-primary border-secondary mt-4 max-w-fit rounded border py-2 px-4 font-bold opacity-80 transition-opacity hover:opacity-100">
            Go to home page
          </a>
        </Link>
      </Layout>

      <Footer />
    </>
  );
};

export default Error404Page;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
};
