import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Project } from "../../../graphql/generated/graphcms";
import Title from "../../common/Title";
import DetailedProject from "./DetailedProject";

interface ProjectsSectionProps {
  projectsData: Project[];
  description?: string;
}

function ProjectsSection({ projectsData, description }: ProjectsSectionProps) {
  const { t } = useTranslation("home");

  return (
    <section id="projects" className="mt-8 md:mt-16">
      <Title>{t("titles.projects")}</Title>
      {description && (
        <p className="mt-4 sm:text-lg md:text-xl">
          {description}
          <br />
          <br />
          <span>
            {t("project.visit")}{" "}
            <Link href="/projects" passHref>
              <a className="fancy-ring fancy-ring-bg rounded-md underline underline-offset-2 transition-colors hover:text-primary-500 focus:text-primary-500">
                {t("project.page")}
              </a>
            </Link>
            .
          </span>
        </p>
      )}
      <ul className="mt-8 flex flex-col gap-y-5">
        {projectsData.map((project) => {
          return (
            <li key={project.slug}>
              <DetailedProject projectData={project} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectsSection;
