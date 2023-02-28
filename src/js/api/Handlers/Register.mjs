/*const form = document.querySelector("#registerForm");

form.addEventListener ("submit", (event) => {
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    console.log(profile)
})*/
 

const form = document.querySelector("#registerForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const profile = Object.fromEntries(Array.from(formData.entries()));
  console.log(profile);
});
