import { withUrqlClient } from "next-urql";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next/types";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Layout from "../../components/layout";
import {
  GetProjectBySlugDocument,
  useGetProjectBySlugQuery,
} from "../../graphql/generated/graphql";
import GraphCMSCLient, { ssrCache } from "../../lib/urql";

interface ProjectPageProps {
  slug: string;
}

const ProjectPage = ({ slug }: ProjectPageProps) => {
  const [{ data: ProjectData }] = useGetProjectBySlugQuery({
    variables: { slug },
  });

  return (
    <>
      <Navbar />
      <section className="mt-20">
        <Image
          objectFit="cover"
          height={600}
          width={1400}
          src={ProjectData.project?.projectThumbnail?.url ?? ""}
          alt={ProjectData.project?.projectThumbnailAlt}
        />
        <Layout className="py-4">
          <h2 className="text-center text-3xl font-black tracking-wide sm:text-4xl md:text-5xl">
            {ProjectData.project.title}
          </h2>

          <p className="text-secondary mt-4 text-center">
            {ProjectData.project.description}
          </p>

          <div className="text-secondary mt-4 text-center">
            <p>Made with these technologies:</p>
            <ul className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
              {ProjectData.project.techStack.map((stack, index) => {
                return (
                  <li
                    className="bg-secondary float-left rounded-full p-1 px-3"
                    key={index}
                  >
                    {stack}
                  </li>
                );
              })}
            </ul>
          </div>

          <article
            className="prose prose-zinc mt-12 dark:prose-invert lg:prose-xl"
            dangerouslySetInnerHTML={{
              __html: ProjectData.project.content.html,
            }}
          ></article>
        </Layout>
      </section>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await GraphCMSCLient.query(GetProjectBySlugDocument, {
    slug: params?.slug,
  }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
      slug: params?.slug,
    },
    revalidate: 86400,
  };
};

export default withUrqlClient(
  (ssr) => ({
    url: process.env.NEXT_PUBLIC_GRAPHCMS_SCHEMA_URL,
  }),
  { ssr: false }
)(ProjectPage);
