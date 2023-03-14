export function postTemplateA(postData) {
  const post = document.createElement("div");
  post.innerHTML = `<div class="card" style="width: 24rem; margin-bottom: 20px">
  <img src=${postData.media}" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${postData.title}</h5>
    <p class="card-text">
     ${postData.body}
    </p>
    ${
      whenToSHowDeleteButton(postData)
        ? '<button id="deletePost" class=" btn btn-outline-danger btn-rounded">Delete</a>'
        : ""
    }

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

function whenToSHowDeleteButton(postData) {
  const profile = JSON.parse(localStorage.profile);
  if (profile.name === postData.author.name) {
    return true;
  } else {
    return false;
  }
}
