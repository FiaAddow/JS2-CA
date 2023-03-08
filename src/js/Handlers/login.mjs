// import { login } from "../api/auth/Login.mjs";


console.log("hiiiii");


function setLoginFormListener() {
  const form = document.querySelector("#LoginForm");

  console.log(form);

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);

      console.log(form);
      const profile = Object.fromEntries(formData.entries())
      
      //send to API
     login(profile)
    })
  }
 
}