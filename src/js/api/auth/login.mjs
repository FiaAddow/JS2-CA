import { API_SOCIAL_URL } from "../constants.mjs";
import * as Storage from "../../storage/index.mjs"

const action = "/auth/login";
const method = "post";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  })
  
  const {accessToken, ...user } = await response.json()
  
  Storage.save("token", accessToken)

  Storage. save("profile", user)
}
 
//const token = localStorage.setItem("token");