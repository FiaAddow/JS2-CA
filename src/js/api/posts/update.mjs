import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const method = "/post";
const action = "/posts";

export async function updatePost(postData) {
  const updatePostURL = API_SOCIAL_URL + action;

  const response = await authfetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  console.log(post);
}
