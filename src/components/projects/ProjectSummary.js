import React from "react";

const ProjectSummary = ({project}) => {
  return (
    <div className="project-Summary section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title indigo-text text-darken-2">{project.title}</span>
          <p>Posted by the Net Ninja</p>
          <p className="grey-text">17 November, 2018</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
