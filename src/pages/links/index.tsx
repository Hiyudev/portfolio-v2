import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import { User } from "phosphor-react";
import BigLogoIcon from "../../components/icon/BigLogo";
import { SocialList } from "../../types";

const LinksPage = () => {
  const { t } = useTranslation("links");

  return (
    <div className="min-w-screen relative flex min-h-screen flex-col items-center justify-center gap-6">
      <div aria-hidden>
        <BigLogoIcon />
      </div>

      <div className="flex flex-col items-center gap-2 text-2xl font-black sm:text-3xl md:text-4xl">
        <h1>Kevin</h1>
        <span className="text-secondary text-base">@Hiyudev</span>
      </div>

      <ul className="flex flex-col gap-4">
        <li>
          <Link href={"/"} passHref>
            <a
              aria-label={t("portfolio")}
              className="bg-primary border-secondary group relative flex min-w-[240px] items-center justify-center gap-2 rounded-full border p-2 outline-none"
            >
              <div className="fancy-gradient absolute inset-0.5 -z-10 opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75" />

              <User aria-hidden weight="bold" />
              <span className="text-secondary">Website</span>
            </a>
          </Link>
        </li>
        {Object.entries(SocialList).map(([name, { logo, link }]) => (
          <li key={name}>
            <Link href={link} passHref>
              <a
                aria-label={`${t("access").replace("{name}", name)}`}
                className="bg-primary border-secondary group relative flex min-w-[240px] items-center justify-center gap-2 rounded-full border p-2 outline-none"
              >
                <div
                  aria-hidden
                  className="fancy-gradient absolute inset-0.5 -z-10 opacity-0 blur transition-opacity group-hover:opacity-75 group-focus:opacity-75"
                />

                {logo}
                <span className="text-secondary">{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["links"])),
    },
  };
};
