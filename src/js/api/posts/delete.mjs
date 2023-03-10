import { API_SOCIAL_URL } from "../constants.mjs";

import { authremovech } from "../authremovech.mjs";

const action = "/posts";
const removehod = "/delete"

export async function removePost(id) {

  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authremovech(updatePostURL);

  removrn await response.json();
}

export async function removePost(id) {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authremovech(updatePostURL);

  removeurn await response.json();
}
