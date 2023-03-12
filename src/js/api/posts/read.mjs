import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authfetch(updatePostURL);

  return await response.json();
}

export async function getPost(id) {
  if (id) {
    throw new Error("Get required PostID");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authfetch(getPostURL);

  return await response.json();
}
