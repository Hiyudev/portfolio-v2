import { GetStaticProps } from "next/types";
import dynamic from "next/dynamic";
import {
  GetAllFeaturedProjectsDocument,
  GetSectionByTitleDocument,
  Project,
} from "../graphql/generated/graphcms";
import { initGraphClient, initHashClient } from "../lib/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetAllBlogPostsDocument, Post } from "../graphql/generated/hashnode";

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
const BlogsSection = dynamic(() => import("../components/sections/Blog"));

interface HomePageProps {
  HeroTags: string;
  HeroDescription: string;
  ProjectsDescription: string;
  FeaturedProjectsData: Project[];
  ContactsDescription: string;
  BlogPosts: Post[];
}

const HomePage = ({
  HeroTags,
  HeroDescription,
  ProjectsDescription,
  FeaturedProjectsData,
  ContactsDescription,
  BlogPosts,
}: HomePageProps) => {
  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <HeroSection
          tags={HeroTags ?? ""}
          description={HeroDescription ?? ""}
        />

        <ProjectsSection
          description={ProjectsDescription ?? ""}
          projectsData={FeaturedProjectsData ?? []}
        />

        <BlogsSection blogPosts={BlogPosts ?? []} />

        <ContactsSection description={ContactsDescription ?? ""} />
      </Layout>

      <Footer />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const GClient = initGraphClient(locale);

  const {
    section: { content: HeroTags },
  } = await GClient.request(GetSectionByTitleDocument, {
    title: "HeroTags",
  });

  const {
    section: { content: HeroDescription },
  } = await GClient.request(GetSectionByTitleDocument, {
    title: "HeroDescription",
  });

  const {
    section: { content: ProjectsDescription },
  } = await GClient.request(GetSectionByTitleDocument, {
    title: "ProjectsDescription",
  });

  const {
    section: { content: ContactsDescription },
  } = await GClient.request(GetSectionByTitleDocument, {
    title: "ContactsDescription",
  });

  const { projects: FeaturedProjectsData } = await GClient.request(
    GetAllFeaturedProjectsDocument
  );

  const HClient = initHashClient();

  const {
    user: {
      publication: { posts: BlogPosts },
    },
  } = await HClient.request(GetAllBlogPostsDocument);

  return {
    props: {
      HeroTags,
      HeroDescription,
      ProjectsDescription,
      FeaturedProjectsData,
      ContactsDescription,
      BlogPosts,
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "project",
        "blog",
      ])),
    }
  };
};
