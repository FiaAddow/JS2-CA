//import { setRegisterFormListener } from "./handlers/Register.mjs";
//import { setLoginFormListener } from "./handlers/login.mjs";
import * as templates from "./templets/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { renderPostTemplates } from "./templets/index.mjs";

const path = location.pathname;
console.log(path);

if (path === "/profile/login.htm") {
  //setLoginFormListener();
} else if (path === "/profile/register.html") {
  //setRegisterFormListener();
}
if (path === "/") {
  redirect();
}

async function testTemplate() {
  // when this function is called
  const posts = await postMethods.getPosts();
  const post = posts[46];
  const container = document.querySelector("#post"); //get the container frm html file
  if (container) {
    renderPostTemplates(posts, container);
  }
  //render the post template inside the render.
}

//make a function to redirect from index. html- login(register)¨
function redirect() {
  //if the user is logged in-redirect to the homepage
  if (localStorage.token) {
    location.href = "/profile/homepage.html";
  } else location.href = "/profile/login.html";
  //if the user in not logged in- redirect to the login page
}

testTemplate();

var profile = JSON.parse(localStorage.getItem("profile"))
document.getElementById("fullName").innerHTML = profile.name
console.log(profile.name);
