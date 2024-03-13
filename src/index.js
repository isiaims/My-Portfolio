import { makeBodyElements } from "./interface";
import "./styles.css";
import "../../Portfolio/css/all.min.css";

makeBodyElements();

// Variables
const projectDiv = document.querySelector(".project");
const aboutDiv = document.querySelector(".about");
const searchDiv = document.querySelector(".search");
const contentHeader = document.querySelectorAll(".header > h2");

// Functions
function setContent() {
  aboutDiv.classList.add("active");
  contentHeader[0].setAttribute(
    "style",
    "background-color: var(--bg-0); opacity: 1;"
  );
  aboutDiv.classList.add("active");
}
setContent();
function switchContent() {
  if (this === contentHeader[0]) {
    this.setAttribute("style", "background-color: var(--bg-0); opacity: 1;");
    contentHeader[1].removeAttribute("style");
    aboutDiv.classList.add("active");
    projectDiv.classList.remove("active");
  } else {
    this.setAttribute("style", "background-color: var(--bg-0); opacity: 1;");
    contentHeader[0].removeAttribute("style");
    aboutDiv.classList.remove("active");
    projectDiv.classList.add("active");
  }
}

let isLightTheme = true;

function toggleTheme() {
  isLightTheme = !isLightTheme;
  document.body.setAttribute("data-theme", isLightTheme ? "light" : "dark");
}

const sun = document.querySelector(".sun");

sun.checked = isLightTheme;

// Event Listeners
contentHeader.forEach((h2) => h2.addEventListener("click", switchContent));
sun.addEventListener("change", toggleTheme);
