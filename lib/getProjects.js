import project from "../data/project.json"

export async function getAllProjects() {
  // const res = await fetch(new URL(apiUrl));
  // const skill = await res.json();
  return project;
}