import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const action = "/posts";
const method = "/delete";

export async function removePost(id) {
  if (!id) {
    throw new Error("delete required PostID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authfetch(updatePostURL, {
    method,
  });

  return await response.json();
}
