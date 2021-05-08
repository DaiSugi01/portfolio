import fetch from "node-fetch";
const apiUrl =
  "https://o2yuulg8n7.execute-api.us-east-2.amazonaws.com/production/sendemail";
  // "https://gtjgsn06qc.execute-api.us-east-2.amazonaws.com/testapi/test"

export async function getAllPostsData(email, message) {
  const res = await fetch(new URL(apiUrl), {
    method: "POST",
    body: JSON.stringify({
      email: "daisugi124@gmail.com",
      message: "test dayo",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const posts = await res.json();

  return posts;
}
// export async function getAllPostsData() {
//   const res = await fetch("/test", {
//         method: "POST",
//         body: {},
//       });
//   const posts = await res.json();
//   console.log(res)

//   return posts;
// }
