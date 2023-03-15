import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const method = "/posts";
const action = "put";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("update requires as postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authfetch(updatePostURL, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
