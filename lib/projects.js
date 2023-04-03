export async function getProjectsData() {
  const res = await fetch('https://find-your-joy-app.onrender.com/api/projects')
  const resJson = await res.json()
  return resJson
}