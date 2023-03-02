
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method ="post";

export async function Register(profile) {
console.log(action);
const registerURL = API_SOCIAL_URL + action;
console.log(registerURL);

}