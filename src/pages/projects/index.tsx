import { GetStaticProps } from "next/types";
import dynamic from "next/dynamic";
import { initGraphClient } from "../../lib/client";
import {
  GetAllProjectsDocument,
  Project,
} from "../../graphql/generated/graphcms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Title from "../../components/common/Title";
import { useTranslation } from "next-i18next";

const GalleryProject = dynamic(
  () => import("../../components/sections/Projects/GalleryProject")
);
const Footer = dynamic(() => import("../../components/common/Footer"));
const Layout = dynamic(() => import("../../components/layout"));
const Navbar = dynamic(() => import("../../components/common/Navbar"));

interface ProjectsPageProps {
  ProjectsData: Project[];
}

const ProjectsPage = ({ ProjectsData }: ProjectsPageProps) => {
  const { t } = useTranslation("home");

  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <Title>{t("titles.projects")}</Title>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ProjectsData.map((project) => (
            <GalleryProject key={project.slug} projectData={project} />
          ))}
        </ul>
      </Layout>

      <Footer />
    </>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const GClient = initGraphClient(locale);

  const { projects: ProjectsData } = await GClient.request(
    GetAllProjectsDocument
  );

  return {
    props: {
      ProjectsData,
      ...(await serverSideTranslations(locale, ["common", "home", "project"])),
    },
    revalidate: 43200,
  };
};
