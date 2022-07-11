import { GetStaticProps } from "next/types";
import dynamic from "next/dynamic";
import { initGraphClient } from "../../lib/client";
import {
  GetAllProjectsDocument,
  Project,
} from "../../graphql/generated/graphcms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Footer = dynamic(() => import("../../components/common/Footer"));
const Layout = dynamic(() => import("../../components/layout"));
const Navbar = dynamic(() => import("../../components/common/Navbar"));

const ProjectsSection = dynamic(
  () => import("../../components/sections/Projects")
);

interface ProjectsPageProps {
  ProjectsData: Project[];
}

const ProjectsPage = ({ ProjectsData }: ProjectsPageProps) => {
  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <ProjectsSection projectsData={ProjectsData ?? []} />
      </Layout>

      <Footer />
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const GLanguage = locale.replace("-", "");
  const GClient = initGraphClient(GLanguage);

  const { projects: ProjectsData } = await GClient.request(
    GetAllProjectsDocument
  );

  return {
    props: {
      ProjectsData,
      ...(await serverSideTranslations(locale, ["common", "home", "project"])),
    },
  };
};
