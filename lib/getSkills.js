// import fetch from "node-fetch";
// const apiUrl = "https://jsonplaceholder.typicode.com/posts";
import ios from "../data/ios.json"
import back from "../data/backend.json"
import front from "../data/frontend.json"


export async function getAllSkills() {
  // const res = await fetch(new URL(apiUrl));
  // const skill = await res.json();
  return [ios, front, back];
}

export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getSkillData(id) {
  // const res = await fetch(new URL(`${apiUrl}/${id}/`));
  // const post = await res.json();

  return data;
};
