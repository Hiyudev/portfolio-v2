import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ShareNetwork, Article, House } from "phosphor-react";
import { useMemo } from "react";

export const websiteHomeSections = {
  HOME: {
    label: {
      value: "home",
      description: "view home",
    },
    link: "/",
    image: {
      source: <House aria-label="House image" weight="bold" />,
    },
  },
  PROJECTS: {
    label: {
      value: "projects",
      description: "view projects",
    },
    link: "/#projects",
    image: {
      source: <ShareNetwork aria-label="Projects image" weight="bold" />,
    },
  },
  BLOGS: {
    label: {
      value: "blogs",
      description: "view blog articles",
    },
    link: "/#blogs",
    image: {
      source: <Article aria-label="Blog articles" weight="bold" />,
    },
  },
};

function LinkList() {
  const { t } = useTranslation();

  const NavLinkList = useMemo(() => {
    return Object.entries(websiteHomeSections).map(([key, value]) => {
      const label = t(`navbar.${value.label.value}`);
      return (
        <li key={key}>
          <Link href={value.link} passHref>
            <a
              aria-label={value.label.description}
              className="fancy-ring fancy-ring-bg group flex flex-row items-center gap-2 rounded-sm decoration-primary-500 hover:underline hover:underline-offset-2 focus:underline"
            >
              <div className="group-hover:text-primary-500 group-hover:transition-colors group-focus:text-primary-500">
                {value.image.source}
              </div>
              <span className="first-letter:uppercase">{label}</span>
            </a>
          </Link>
        </li>
      );
    });
  }, [t]);

  return <>{NavLinkList}</>;
}

export default LinkList;
