import { useEffect, useState, Suspense } from "react";
import { createFileRoute, useParams } from "@tanstack/react-router";
import { Project } from "@pages/Project/Project";
import { projectsData } from "@data/static/projects";
import { IProjectsData } from "@data/static/projects";
import { Footer } from "@components/Footer/Footer";

export const Route = createFileRoute("/projects/$projectId/$projectName/")({
  component: Component,
});

type AType = {
  projectId: string;
  projectName: string;
};

function Component() {
  const { projectId }: AType = useParams({ strict: false });
  const [project, setProject] = useState<IProjectsData>({} as IProjectsData);

  useEffect(() => {
    const project = projectsData.find(
      (project) => project.id === Number(projectId),
    );

    if (!project) return;

    setProject(project);
  }, [projectId]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Project
          name={project.projectTitle}
          description={project.projectDescription}
          shortDescription={project.projectDescriptionShort}
          process={project.projectsProcess || []}
          stack={project.projectsTechnologies || []}
          media1={{
            type: "image",
            url: project.projectPictureUrl,
            alt: project.projectTitle,
          }}
          media2={{
            type: "image",
            url: project.projectPictureUrl,
            alt: project.projectTitle,
          }}
        />
        <Footer />
      </Suspense>
    </>
  );
}
