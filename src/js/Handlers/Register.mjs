
//export function setRegisterFormListener () {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    console.log(profile)
  })

//}