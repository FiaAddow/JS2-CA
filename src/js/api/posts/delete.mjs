import { API_SOCIAL_URL } from "../constants.mjs";

import { authfetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

export async function deletePost(id) {
  if (!id) {
    throw new Error("delete required PostID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authfetch(updatePostURL, {
    method,
  });

  const res = await response.json();

  console.log(res);
}
