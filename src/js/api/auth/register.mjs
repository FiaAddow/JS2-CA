import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register.mjs";
const method = "post";

 export default async function Register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  })
  
  const results = await response.json();
  alert("You are registred");
  console.log("tester");
  return results
}
