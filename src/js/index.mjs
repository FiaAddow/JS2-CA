import { setRegisterFormListener } from "./Handlers/Register.mjs";
import { setLoginFormListener } from "./Handlers/login.mjs";

import * as posts from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/Profile/login.htm") {
  setLoginFormListener();
} else if (path === "/profile/register.html") {
  setRegisterFormListener();
}

createPost({
  title: "example post",
  body: "Also an example",
});
