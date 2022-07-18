import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next/types";
import {
  GetAllProjectsDocument,
  GetProjectBySlugDocument,
  Project,
} from "../../graphql/generated/graphcms";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { initGraphClient } from "../../lib/client";
import dynamic from "next/dynamic";
import Tag from "../../components/common/Tag";

const Footer = dynamic(() => import("../../components/common/Footer"));
const Layout = dynamic(() => import("../../components/layout"));
const Navbar = dynamic(() => import("../../components/common/Navbar"));

interface ProjectPageProps {
  projectData: Project;
}

const ProjectPage = ({ projectData }: ProjectPageProps) => {
  const { t } = useTranslation("project");

  return (
    <>
      <Navbar />
      <section className="mt-20">
        <Layout>
          <div className="border-secondary relative mb-8 h-96 w-full overflow-hidden rounded-2xl border">
            {projectData.projectThumbnail && (
              <Image
                objectFit="cover"
                className="opacity-80 transition-transform hover:scale-105 hover:opacity-100"
                layout="fill"
                src={projectData.projectThumbnail?.url ?? ""}
                alt={projectData.projectThumbnailAlt}
              />
            )}
          </div>

          <h2 className="text-center text-3xl font-black tracking-wide sm:text-4xl md:text-5xl">
            {projectData.title}
          </h2>

          <p className="text-secondary mt-4 text-center">
            {projectData.description}
          </p>

          <div className="text-secondary mt-4 text-center">
            <p>{t("techDescription")}</p>
            <ul className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
              {projectData.techStack.map((stack, index) => {
                return <Tag key={index}>{stack}</Tag>;
              })}
            </ul>
          </div>

          <article
            className="prose prose-zinc mt-12 max-w-none prose-a:underline-offset-2 prose-a:transition-colors hover:prose-a:text-primary-500 dark:prose-invert lg:prose-lg"
            dangerouslySetInnerHTML={{
              __html: projectData.content.html,
            }}
          ></article>
        </Layout>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const GClient = initGraphClient();

  const { projects: ProjectsData } = await GClient.request(
    GetAllProjectsDocument
  );

  const paths = ProjectsData.flatMap((project) => {
    return locales.map((locale) => {
      return {
        params: {
          slug: project.slug,
        },
        locale,
      };
    });
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug as string;

  const GClient = initGraphClient(locale);

  const { project } = await GClient.request(GetProjectBySlugDocument, { slug });

  return {
    props: {
      projectData: project,
      ...(await serverSideTranslations(locale, ["common", "project"])),
    },
    revalidate: 86400,
  };
};
