import { useTranslation } from "next-i18next";
import Title from "../../common/Title";

function BlogsSection() {
  const { t } = useTranslation("home");

  return (
    <section
      id="blogs"
      className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2"
    >
      <div className="space-y-4">
        <Title>{t("titles.blog")}</Title>
        <p className="text-secondary">Pog</p>
      </div>
    </section>
  );
}

export default BlogsSection;
