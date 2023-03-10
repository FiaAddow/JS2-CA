import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const method = "/post";
const action = "/posts";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authfetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const post = await response.json();

  console.log(post);
}
