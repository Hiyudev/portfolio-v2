import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../../../graphql/generated/graphcms";

interface IGalleryProjectProps {
  projectData: Project;
}

function GalleryProject({ projectData }: IGalleryProjectProps) {
  const { t } = useTranslation("project");

  return (
    <li className="border-secondary group relative overflow-hidden rounded-md border">
      <Link passHref href={`/project/${projectData.slug}`}>
        <a
          aria-label={`${t("datailedProject.label.partOne")} ${
            projectData.title
          } ${t("datailedProject.label.partTwo")}.`}
        >
          <div className="relative flex h-80 items-center justify-center">
            {projectData.projectThumbnail && (
              <Image
                objectFit="cover"
                layout="fill"
                className="scale-100 opacity-100 transition-transform group-hover:scale-105 group-hover:opacity-75"
                priority={false}
                alt={projectData.projectThumbnailAlt}
                src={projectData.projectThumbnail.url}
              />
            )}
            <div className="bg-primary absolute hidden h-32 w-32 items-center justify-center rounded-full group-hover:flex">
              {t("galleryProject.viewLabel")}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default GalleryProject;
