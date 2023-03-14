import { createPost } from "../api/posts/create.mjs";

const form = document.querySelector("#createPostForm");

console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const post = Object.fromEntries(formData.entries());

  createPost(post);
});
