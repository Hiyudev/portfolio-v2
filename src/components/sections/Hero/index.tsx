import Image from "next/image";
import { SocialList } from "../../common/Footer";
import Link from "next/link";
import { useTranslation } from "next-i18next";

interface HeroSectionProps {
  tags: string;
  description: string;
}

function HeroSection({ tags, description }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="mt-8 grid grid-rows-2 md:grid-cols-2 md:grid-rows-none">
      <div>
        <h1 className="fancy-gradient bg-clip-text text-4xl font-black tracking-wide text-transparent sm:text-5xl md:text-6xl">
          Kevin
        </h1>

        <div className="text-secondary mt-4 flex flex-row gap-8 sm:text-lg md:text-xl">
          {tags}
        </div>

        <p className="mt-4 sm:text-lg md:text-xl">{description}</p>

        <div className="mt-8">
          <p className="text-secondary">{t("hero.socialMediaText")}</p>
          <ul className="mt-4 flex gap-4">
            {Object.entries(SocialList).map(([key, value], index) => {
              return (
                <li
                  className="border-secondary relative h-full rounded-md border"
                  key={index}
                >
                  <Link passHref href={value.link}>
                    <a
                      aria-label={`${key} link`}
                      className="bg-primary group flex h-full flex-row items-center gap-2 rounded-md p-4 decoration-primary-500 focus:outline-none"
                    >
                      <div className="fancy-gradient absolute inset-0.5 -z-10 opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75" />
                      <div className="transition-colors group-hover:text-primary-500 group-focus:text-primary-500">
                        {value.logo}
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative">
        <Image
          objectFit="cover"
          layout="fill"
          src="/static/Shapes.png"
          alt="Geometric shapes image"
          priority={false}
        />
      </div>
    </section>
  );
}

export default HeroSection;
