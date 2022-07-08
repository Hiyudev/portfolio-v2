import { GetStaticProps } from "next";
import { withUrqlClient } from "next-urql";
import dynamic from "next/dynamic";
import BlogsSection from "../components/sections/Blog";

const HeroSection = dynamic(() => import("../components/sections/Hero"));
const Footer = dynamic(() => import("../components/common/Footer"));
const Layout = dynamic(() => import("../components/layout"));
const Navbar = dynamic(() => import("../components/common/Navbar"));
const ContactsSection = dynamic(
  () => import("../components/sections/Contacts")
);
const ProjectsSection = dynamic(
  () => import("../components/sections/Projects")
);

import {
  GetAllProjectsDocument,
  GetSectionByTitleDocument,
  useGetAllProjectsQuery,
  useGetSectionByTitleQuery,
} from "../graphql/generated/graphql";
import GraphCMSCLient, { ssrCache } from "../lib/urql";

const HomePage = () => {
  const [{ data: HeroDescription }] = useGetSectionByTitleQuery({
    variables: { title: "HeroDescription" },
  });
  const [{ data: HeroTags }] = useGetSectionByTitleQuery({
    variables: { title: "HeroTags" },
  });

  const [{ data: ProjectsDescription }] = useGetSectionByTitleQuery({
    variables: { title: "ProjectsDescription" },
  });

  const [{ data: ContactsDescription }] = useGetSectionByTitleQuery({
    variables: { title: "ContactsDescription" },
  });

  const [{ data: ProjectsData }] = useGetAllProjectsQuery();

  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <HeroSection
          tags={HeroTags?.section.content ?? ""}
          description={HeroDescription?.section?.content ?? ""}
        />

        <ProjectsSection
          description={ProjectsDescription?.section?.content ?? ""}
          projectsData={
            ProjectsData?.projects.filter((project) => project.featured) ?? []
          }
        />

        <BlogsSection />

        <ContactsSection
          description={ContactsDescription?.section?.content ?? ""}
        />
      </Layout>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await Promise.all([
    GraphCMSCLient.query(GetSectionByTitleDocument, {
      title: "HeroDescription",
    }).toPromise(),
    GraphCMSCLient.query(GetSectionByTitleDocument, {
      title: "ProjectsDescription",
    }).toPromise(),
    GraphCMSCLient.query(GetSectionByTitleDocument, {
      title: "ContactsDescription",
    }).toPromise(),
    GraphCMSCLient.query(GetAllProjectsDocument).toPromise(),
  ]);

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
)(HomePage);
