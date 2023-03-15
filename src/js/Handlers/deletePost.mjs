import { deletePost } from "../api/posts/delete.mjs";

const form = document.querySelector("#deletePost");

console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const post = Object.fromEntries(formData.entries());

  console.log(post);

  deletePost(post);
});
