import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useMemo } from "react";
import { HomeSectionsList } from "../../../../types";

function LinkList() {
  const { t } = useTranslation();

  const NavLinkList = useMemo(() => {
    return Object.entries(HomeSectionsList).map(([key, value]) => {
      const label = t(`navbar.${value.label.value}`);
      return (
        <li key={key}>
          <Link href={value.link} passHref>
            <a
              aria-label={value.label.description}
              className="fancy-ring fancy-ring-bg-secondary md:fancy-ring-bg md:fancy-ring-bg group flex flex-row items-center gap-2 rounded-sm decoration-primary-500 hover:underline hover:underline-offset-2 focus:underline"
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
