"use client";

import Link from "next/link";
import { projectsData } from "@/data/projects";
import GetInTouchForm from "@/components/GetInTouchForm";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative Façade Construction Expertise</h1>
          <p>
            Engineering spectacular building skins and innovative façades for ambitious, 
            unique architectural creations true to their original designs.
          </p>
          <Link href="/projects" className="cta-button">
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="section-header">
          <h2>Façade Construction Expertise</h2>
          <p>Innovative façades and building envelopes engineered by V-Square</p>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projects?id=${project.id}`}>
              <div className="project-card">
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
            </Link>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <GetInTouchForm />
    </main>
  );
}
