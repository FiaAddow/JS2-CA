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

async function testTemplate() {
  // when this function is called
  const posts = await postMethods.getPosts();
  const post = posts[46];
  const container = document.querySelector("#post"); //get the container frm html file
  renderPostTemplates(posts, container); //render the post template inside the render.
}

testTemplate();
