const userLogIn = prompt("Please insert your username");
const newEl = (el) => document.createElement(el);
const $body = document.body;

const wrapperEl = newEl("div");
const titleEl = newEl("h3");
const welcomeEl = newEl("p");
const oneOfUsEl = newEl("p");
const notOneOfUsEl = newEl("p");

wrapperEl.className = "wrapper";
titleEl.className = "title";
welcomeEl.className = "welcome";
oneOfUsEl.className = "one_of_us";
notOneOfUsEl.className = "not_one_of_us";

titleEl.textContent = `Hi ${userLogIn}!`;
welcomeEl.textContent = "this page is for you!";
oneOfUsEl.textContent = "You are one of us now, contratulations!";
notOneOfUsEl.textContent = "Your Username hasn't been saved in local storage yet, but we are gonna make up for that! Try to refresh this page and insert your username again";

$body.append(wrapperEl, titleEl, welcomeEl);

//localStorage.setItem('username', userLogIn)

try {
  if (localStorage.getItem("username") !== userLogIn) {
    $body.append(notOneOfUsEl);
    console.error(notOneOfUsEl.textContent)
    throw error;
  } else {
    $body.append(oneOfUsEl);
  }
} catch (error) {
  localStorage.setItem("username", userLogIn);
}
