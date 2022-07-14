import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next/types";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Title from "../../components/common/Title";
import Layout from "../../components/layout";
import BlogPost from "../../components/sections/Blog/BlogPost";
import {
  GetAllBlogPostsDocument,
  Post,
} from "../../graphql/generated/hashnode";
import { initHashClient } from "../../lib/client";

interface IBlogPostsProps {
  BlogPosts: Post[];
}

function BlogsPage({ BlogPosts }: IBlogPostsProps) {
  const { t } = useTranslation("home");

  return (
    <>
      <Navbar />
      <Layout className="mt-20">
        <Title>{t("titles.blog")}</Title>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {BlogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              description={post.brief}
              coverImageUrl={post.coverImage}
              href={`/blog/${post.slug}`}
              timePublished={post.dateAdded}
              text={post.contentMarkdown}
            />
          ))}
        </ul>
      </Layout>

      <Footer />
    </>
  );
}

export default BlogsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const HClient = initHashClient();

  const {
    user: {
      publication: { posts: BlogPosts },
    },
  } = await HClient.request(GetAllBlogPostsDocument);

  return {
    props: {
      BlogPosts,
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "project",
        "blog",
      ])),
    },
  };
};
