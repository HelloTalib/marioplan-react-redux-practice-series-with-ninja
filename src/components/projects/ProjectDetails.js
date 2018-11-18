import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project TITLE- {id}</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ex? Amet consectetur suscipit doloremque maiores expedita reprehenderit voluptates. Error est illo tempora eos earum facilis doloremque architecto laudantium saepe nihil!</p>
        </div>
        <div className="card-action  grey lighten-4 grey-text">
          <p>Posted by Md Talib</p>
            <p>17 November, 2018</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
