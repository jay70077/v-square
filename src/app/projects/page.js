"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const projectId = searchParams.get("id");
    if (projectId) {
      const project = projectsData.find(p => p.id === parseInt(projectId));
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [searchParams]);

  return (
    <main>
      <section>
        <div className="section-header">
          <h2>All Projects</h2>
          <p>Discover our complete portfolio of innovative façade solutions</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-location">{project.location}</div>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
