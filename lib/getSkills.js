import ios from "../data/ios.json"
import back from "../data/backend.json"
import front from "../data/frontend.json"


export async function getAllSkills() {
  // const res = await fetch(new URL(apiUrl));
  // const skill = await res.json();
  return [ios, front, back];
}
