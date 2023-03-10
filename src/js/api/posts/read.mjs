import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPost() {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authfetch(updatePostURL);

  return await response.json();
}

export async function getPost(id) {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authfetch(updatePostURL);

  return await response.json();
}
