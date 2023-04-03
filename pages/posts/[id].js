import Layout from "../../components/Layout"
import { getAllProjectIds, getProjectData } from "../../lib/projects"

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.id)
  return {
    props: {
      projectData,
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllProjectIds().then((response) => {
    console.log('getStaticPaths response')
    console.log(response)
    return response
  })

  
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ projectData }) {
  return (
    <Layout>
      {projectData.name}
      <br />
      {projectData.id}
      <br />
      {projectData.description}
    </Layout>
  )
}