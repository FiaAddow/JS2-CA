/*const form = document.querySelector("#registerForm");

form.addEventListener ("submit", (event) => {
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    console.log(profile)
})*/
 



//export function setRegisterFormListener () {}----I CANT EXPORT THIS FUNCTION-alt skal ligge inne  denne funksjonen.
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    console.log('it works')
  })

