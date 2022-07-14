import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../../common/Card";
import { formatDistance } from "date-fns";
import pt from "date-fns/locale/pt-BR";
import en from "date-fns/locale/en-US";
import { getReadingTime } from "../../../../utils/readtime";
import { useTranslation } from "next-i18next";

interface IBlogPostProps {
  href: string;
  title: string;
  description: string;
  coverImageUrl: string;
  timePublished: string;
  text: string;
}

function getFnsLocale(locale: string): Locale {
  switch (locale) {
    case "en":
      return en;
    case "pt":
      return pt;
    default:
      return en;
  }
}

function BlogPost({
  title,
  description,
  coverImageUrl,
  href,
  timePublished,
  text,
}: IBlogPostProps) {
  const { locale } = useRouter();
  const { t } = useTranslation("blog");
  const datefnsLocale = getFnsLocale(locale);

  return (
    <Link passHref href={href}>
      <a className="group outline-none">
        <Card className="relative flex flex-col gap-3">
          <div className="fancy-gradient absolute inset-0.5 -z-10 opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75"></div>
          <div className="relative overflow-hidden rounded-md">
            {coverImageUrl && (
              <Image
                alt={`${title} blog post thumbnail`}
                objectFit="cover"
                height={600}
                width={1400}
                src={coverImageUrl}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-lg font-black">{title}</h3>
              <p>{description}</p>
            </div>
            <p className="text-secondary flex flex-row gap-2 text-sm">
              <span>
                {formatDistance(new Date(timePublished), new Date(), {
                  addSuffix: true,
                  locale: datefnsLocale,
                })}
              </span>
              <span>•</span>
              <span>
                {getReadingTime(text)} {t("blog.readTime")}
              </span>
            </p>
          </div>
        </Card>
      </a>
    </Link>
  );
}

export default BlogPost;
