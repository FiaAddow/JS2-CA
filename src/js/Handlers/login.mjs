import { login } from "../api/auth/Login.mjs";

console.log("hiiiii");

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");
  console.log(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    console.log(formData);
    const profile = Object.fromEntries(formData.entries());

    //send to API
    login(profile);
  });
}
