"use client";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <div className="modal-body">
          <h2>{project.title}</h2>
          <div className="modal-meta">
            <div className="modal-meta-item">
              <div className="modal-meta-label">Location</div>
              <div>{project.location}</div>
            </div>
            <div className="modal-meta-item">
              <div className="modal-meta-label">Category</div>
              <div>{project.category}</div>
            </div>
            <div className="modal-meta-item">
              <div className="modal-meta-label">Year</div>
              <div>{project.year}</div>
            </div>
          </div>
          <p>{project.details}</p>
        </div>
      </div>
    </div>
  );
}
