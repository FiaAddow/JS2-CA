import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...userProfile } = await response.json();

  storage.save("token", accessToken);
  storage.save("profile", JSON.stringify(userProfile));

  if (accessToken != undefined) {
    window.location.href = "/profile/homepage.html";
  } else {
    alert("Something went wrong. Try again!");
  }
}
