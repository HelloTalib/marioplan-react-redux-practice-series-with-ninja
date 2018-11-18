const initState = {
  projects:[
    {
      id:1,
      title: 'learn html & css',
      content: 'lorem blah blah blah'
    },
    {
      id:2,
      title: 'learn React',
      content: 'lorem blah blah blah'
    },
    {
      id:3,
      title: 'learn Node',
      content: 'lorem blah blah blah'
    }
  ]
}

const ProjectReducers = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_USER':
    console.log('created project', action.project)
    default :
    return state
  } 
  return state
}

export default ProjectReducers;
