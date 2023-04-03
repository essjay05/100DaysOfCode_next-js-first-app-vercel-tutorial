import axios from 'axios'

export async function getProjectsData() {
  return new Promise( resolve => {
    axios.get('https://find-your-joy-app.onrender.com/api/projects')
      .then(response => {
        const projects = response.data.data
        console.log('getProjectsData projects:')
        console.log(projects)
        return projects
      })
      .catch(err => console.error(err))
  })
  // const res = await fetch('https://find-your-joy-app.onrender.com/api/projects')
  // const resJson = await res.json()
  // return resJson
}

export async function getAllProjectIds() {
  return new Promise( resolve => {
    axios.get('https://find-your-joy-app.onrender.com/api/projects')
      .then(response => {
        const projectsResults = response.data.data
        console.log('axios getAllProjectIds projectResults:')
        console.log(projectsResults)
        return projectsResults
      })
      .catch(err => console.error(err))
  })
  // const res = await fetch('https://find-your-joy-app.onrender.com/api/projects')
  //   .then(response => {
  //     console.log('getAllProjectIds response:')
  //     console.log(response)
  //   })
  //   .then(data => {
  //     console.log('getAllProjectIds data:')
  //     console.log(data)
  //     return data
  //   })

  // return res
}

export async function getProjectData(id) {
  const results = await fetch(`https://find-your-joy-app.onrender.com/api/projects${id}`)
  const projectData = results.data

  return {
    id,
    ...projectData
  }
}