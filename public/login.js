console.log("login..");

let submitBtn = document.querySelector("#loginBtn");

submitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("btn clicked");
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");

  console.log(username.value);
  console.log(password.value);

  // let response = await fetch("/message");
  // console.log(response);
  // let data = await response.json();
  // console.log(data);

  let response = await fetch("/login", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  let data = await response.json();
  console.log(data);
});
