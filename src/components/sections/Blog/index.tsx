import { useTranslation } from "next-i18next";
import { Post } from "../../../graphql/generated/hashnode";
import Title from "../../common/Title";
import BlogPost from "./BlogPost";

interface BlogSectionProps {
  blogPosts: Post[];
}

function BlogsSection({ blogPosts }) {
  const { t } = useTranslation("home");

  return (
    <section
      id="blogs"
      className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2"
    >
      <div className="space-y-4">
        <Title>{t("titles.blog")}</Title>
        <ul>
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              description={post.brief}
              coverImageUrl={post.coverImage}
              href={`/blog/${post.slug}`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogsSection;
