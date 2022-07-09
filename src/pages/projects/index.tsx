import { GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";
import dynamic from "next/dynamic";
import {
  GetAllProjectsDocument,
  useGetAllProjectsQuery,
} from "../../graphql/generated/graphql";
import createGraphCMSClient, { ssrCache } from "../../lib/urql";

const Footer = dynamic(() => import("../../components/common/Footer"));
const Layout = dynamic(() => import("../../components/layout"));
const Navbar = dynamic(() => import("../../components/common/Navbar"));

const ProjectsSection = dynamic(
  () => import("../../components/sections/Projects")
);

const ProjectsPage = () => {
  const [{ data: ProjectsData }] = useGetAllProjectsQuery();

  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <ProjectsSection projectsData={ProjectsData?.projects ?? []} />
      </Layout>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const lang = locale.replace("-", "");
  const client = createGraphCMSClient(lang);
  await client.query(GetAllProjectsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 86400,
  };
};

export default withUrqlClient(
  (ssr) => ({
    url: process.env.NEXT_PUBLIC_GRAPHCMS_SCHEMA_URL,
  }),
  { ssr: false }
)(ProjectsPage);
