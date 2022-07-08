import { GetAllProjectsQuery } from "../../../graphql/generated/graphql";
import Title from "../../common/Title";
import DetailedProject from "./DetailedProject";

interface ProjectsSectionProps {
  projectsData: GetAllProjectsQuery["projects"];
  description?: string;
}

function ProjectsSection({ projectsData, description }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mt-8 md:mt-16">
      <Title>Projects</Title>
      {description && (
        <p className="text-secondary mt-4 sm:text-lg md:text-xl">
          {description}
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
