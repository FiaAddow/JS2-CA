import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const results = await response.json();
  console.log(results);

  if (response.ok) {
   
    const loginButton = document.createElement("button");
    loginButton.textContent = "Log In";
    loginButton.className = "bw-40 btn btn-outline-dark btn-rounded"; 
    loginButton.setAttribute("data-mdb-ripple-color", "dark"); 

 
    loginButton.style.marginTop = "10px";
    loginButton.style.fontWeight = "bold";

    loginButton.addEventListener("click", () => {
  
      window.location.href = "/profile/login.html";
    });

    const successMessage = document.createElement("p");
    successMessage.textContent = "YEEY! You did it! Please log in!!";

    const container = document.getElementById("registrationContainer");
    container.innerHTML = ""; 

    const contentWrapper = document.createElement("div");
    contentWrapper.style.display = "flex";
    contentWrapper.style.flexDirection = "column";
    contentWrapper.style.alignItems = "center";

    container.appendChild(successMessage);
    container.appendChild(loginButton);

    container.appendChild(contentWrapper);
  } else {
   
    alert("Something went wrong. Try again!");
  }
}
