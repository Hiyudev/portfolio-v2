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
        <p className="text-secondary mt-4 sm:text-lg md:text-xl">
          {description}{" "}
          <span>
            {t("project.visit")}{" "}
            <Link href="/projects" passHref>
              <a className="underline-offset-2 transition-colors hover:text-primary-500">
                {t("project.page")}
              </a>
            </Link>
            .
          </span>
        </p>
      )}
      <ul className="mt-8 gap-y-5 gap-x-5">
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
