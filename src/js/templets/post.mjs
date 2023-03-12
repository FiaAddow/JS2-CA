export function postTemplateA(postData) {
  const post = document.createElement("div");
  post.innerHTML = `<div class="card" style="width: 24rem; margin-bottom: 20px">
  <img src=${postData.media} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${postData.title}</h5>
    <p class="card-text">
     ${postData.body}
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  return post;
}

export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title;
  post.innerText = postData.body;
  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateA));
}
