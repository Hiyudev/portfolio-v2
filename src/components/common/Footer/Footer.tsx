import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Code, GithubLogo, Heart, TwitterLogo } from "phosphor-react";
import LogoIcon from "../../icon/Logo";

export const SocialList = {
  Twitter: {
    logo: <TwitterLogo aria-label="Twitter logo" weight={"bold"} />,
    link: "/social/twitter",
  },
  Github: {
    logo: <GithubLogo aria-label="Github logo" weight={"bold"} />,
    link: "/social/github",
  },
};

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <Link passHref href={"/"}>
          <a className="fancy-ring mx-auto flex h-8 w-8 items-center justify-center rounded-md focus:ring-offset-background-100 dark:focus:ring-offset-background-900">
            <LogoIcon />
          </a>
        </Link>

        <p className="text-secondary mt-6 text-center leading-relaxed">
          {t("footer.description")}
        </p>

        <div aria-labelledby="footer-socials">
          <h2 className="sr-only" id="footer-socials">
            {t("footer.socialLinksSR")}
          </h2>

          <ul className="mt-4 flex items-center justify-center gap-6 md:gap-8">
            {Object.entries(SocialList).map(([key, value], index) => {
              return (
                <li key={index}>
                  <Link passHref href={value.link}>
                    <a
                      aria-label={`${key} link`}
                      className="fancy-ring group flex flex-row items-center gap-2 rounded-md decoration-primary-500 hover:underline hover:underline-offset-2 focus:underline focus:ring-offset-background-100 dark:focus:ring-offset-background-900"
                    >
                      <div className="transition-colors group-hover:text-primary-500 group-focus:text-primary-500">
                        {value.logo}
                      </div>
                      <span>{key}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-secondary mt-6 flex flex-row items-center justify-center gap-1 text-sm leading-relaxed">
          {t("footer.created")}{" "}
          <Heart
            className="transition-colors hover:text-primary-500"
            aria-hidden="true"
            weight="bold"
          />
          <span className="sr-only">{t("footer.love")}</span>
          {t("footer.and")}{" "}
          <Code
            className="transition-colors hover:text-primary-500"
            aria-hidden="true"
            weight="bold"
          />{" "}
          <span className="sr-only">{t("footer.code")}</span>
          {t("footer.by")}{" "}
          <span className="transition-colors hover:text-primary-500">
            Kevin
          </span>
        </p>
        <p className="text-secondary flex justify-center text-sm leading-relaxed">
          2022 Kevin
        </p>
      </div>
    </footer>
  );
}

export default Footer;
