const initState = {
  projects: [
    {
      id: 1,
      title: "Learn React with Redux",
      content: "Course description goes here"
    },
    {
      id: 2,
      title: "Learn PHP with Laravel",
      content: "Course description goes here"
    },
    {
      id: 3,
      title: "Learn Node with MongoDB & express",
      content: "Course description goes here"
    }
  ]
};

const ProjectReducers = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.err);
      return state;
    default:
      return state;
  }
};
export default ProjectReducers;
