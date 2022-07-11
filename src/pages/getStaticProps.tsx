import {
  GetAllFeaturedProjectsDocument,
  GetSectionByTitleDocument,
} from "../graphql/generated/graphcms";
import { initGraphClient, initHashClient } from "../lib/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetAllBlogPostsDocument } from "../graphql/generated/hashnode";

export async function getStaticProps({ locale }) {
  const GLanguage = locale.replace("-", "");
  const GClient = initGraphClient(GLanguage);

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
      ...(await serverSideTranslations(locale, ["common", "home", "project"])),
    },
    revalidate: 86400,
  };
}
