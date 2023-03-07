import { login } from "../api/auth/Login.mjs";

export function setLoginFormListener () {
  const form = document.querySelector("#LoginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
      
      //send to API
     login(profile)
    })
  }
 
}