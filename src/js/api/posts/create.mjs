import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const action = "/posts";
const method = "/post";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authfetch(createPostURL, {
    method,
    body: JSON.stringify(postData),
  });

  const post = await response.json();
}
