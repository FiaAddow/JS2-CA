import { setRegisterFormListener } from "./Handlers/Register.mjs";
import { setLoginFormListener } from "./Handlers/login.mjs";

import * as template from "./templets/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { renderPostTemplate } from "./templets/index.mjs";

const path = location.pathname;

if (path === "/Profile/login.htm") {
  setLoginFormListener();
} else if (path === "/profile/register.html") {
  setRegisterFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPost();
  const post = posts(45);
  const container = document.querySelector("#post");
  renderPostTemplate(post, container);
}

testTemplate();
