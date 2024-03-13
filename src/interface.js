import { announcements, projects } from "./logic";
import Pfp from "./pfp.jpg";

export function makeBodyElements() {
  const container = document.createElement("div");
  container.classList.add("container");
  const header = document.createElement("header");
  header.append(head());
  const main = document.createElement("main");
  const aside = document.createElement("aside");
  aside.append(announce(), socials());
  const content = document.createElement("div");
  content.classList.add("content");
  content.append(contentHeader(), aboutElems(), projectElems());
  main.append(aside, content);

  container.append(header, main);
  document.body.setAttribute("data-theme", "light");
  document.body.append(container);
}
const head = function makeHeaderElements() {
  const nav = document.createElement("nav");
  const userImg = new Image();
  userImg.classList.add("pfp");
  userImg.src = Pfp;
  const div = document.createElement("div");
  div.classList.add("user");
  const p = document.createElement("p");
  p.innerHTML = "Hello There,";
  const h2 = document.createElement("h2");
  const span = document.createElement("span");
  span.innerHTML = "(Front-End Developer)";
  h2.innerHTML = "Isiaka J. Onifade " + span.innerHTML;
  div.append(p, h2);
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("theme-container");
  const formDiv = document.createElement("div");
  formDiv.id = "switch";
  formDiv.classList.add("theme-switch");
  const input = document.createElement("input");
  input.classList.add("sun");
  input.type = "checkbox";
  input.id = "sun";
  const moon = document.createElement("span");
  moon.classList.add("moon");

  formDiv.append(input, moon);
  rightDiv.append(formDiv);
  leftDiv.append(userImg, div);
  nav.append(leftDiv, rightDiv);
  return nav;
};
const announce = function makeAnnounceElements() {
  const annouce = document.createElement("div");
  const annouceHeader = document.createElement("h2");
  annouceHeader.innerHTML = "Announcements";
  const topics = document.createElement("div");
  topics.innerHTML = announcements
    .map((item) => {
      return `
        <div>
            <h3>${item.topic}</h3>
            <p>${item.para}</p>
        </div>
    `;
    })
    .join("");
  annouce.append(annouceHeader, topics);

  return annouce;
};
const socials = function makeSocialsElements() {
  const socials = document.createElement("div");
  socials.classList.add("socials");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Socials";
  const accounts = document.createElement("div");
  accounts.classList.add("accounts");
  const account1 = document.createElement("div");
  const twitterIcon = document.createElement("i");
  twitterIcon.classList.add("fa-regular", "fa-star");
  const account1Names = document.createElement("div");
  const twitterUserName = document.createElement("a");
  twitterUserName.href = "#";
  twitterUserName.innerHTML = "@isiakaCodes";
  const twitterName = document.createElement("a");
  twitterName.href = "#";
  twitterName.innerHTML = "Isiaka Onifade";
  const account2 = document.createElement("div");
  const linkedInIcon = document.createElement("i");
  linkedInIcon.classList.add("fa-regular", "fa-star");
  const account2Names = document.createElement("div");
  const linkedInUserName = document.createElement("a");
  linkedInUserName.href = "#";
  linkedInUserName.innerHTML = "@isiakaCodes";
  const linkedInName = document.createElement("a");
  linkedInName.href = "#";
  linkedInName.innerHTML = "Isiaka Onifade";

  account1Names.append(twitterUserName, twitterName);
  account2Names.append(linkedInUserName, linkedInName);
  account1.append(twitterIcon, account1Names);
  account2.append(linkedInIcon, account2Names);
  accounts.append(account1, account2);
  socials.append(h2, accounts);
  return socials;
};
const contentHeader = function makeContentHeaderElements() {
  const header = document.createElement("div");
  header.classList.add("header");
  const about = document.createElement("h2");
  about.innerHTML = "About";
  const projects = document.createElement("h2");
  projects.innerHTML = "Projects";

  header.append(about, projects);
  return header;
};
const aboutElems = function makeAboutElements() {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Isiaka J. Onifade";
  const p = document.createElement("p");
  const odinLink = document.createElement("a");
  odinLink.href = "https://www.theodinproject.com";
  odinLink.target = "_blank";
  odinLink.innerHTML = " TOP ";
  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://www.youtube.com/";
  youtubeLink.target = "_blank";
  youtubeLink.innerHTML = " Youtube ";
  p.append(
    `Hi, My name is Isiaka J. Onifade and I am a Front-End Web
        Developer in training from Nigeria. I am learning web development
        from The Odin Project (`,
    odinLink,
    ") platform and ",
    youtubeLink,
    ` (per usual 😉). I love making things work and reliable, building effective projects
        and bringing ideas to life.`
  );
  aboutDiv.append(h2, p);
  return aboutDiv;
};
const projectElems = function makeProjectElements() {
  const searchDiv = document.createElement("div");
  searchDiv.classList.add("search");
  const label = document.createElement("label");
  label.setAttribute("for", "search");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-magnifying-glass");
  const input = document.createElement("input");
  input.type = "search";
  input.id = "search";
  input.name = "search";

  label.append(icon);
  searchDiv.append(label, input);

  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");
  const projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");
  projectsDiv.innerHTML = projects
    .map((item, i) => {
      return `
        <div data-num='${i}'>
            <a class='link' data-num='${i}' href=${item.link} target="_blank"></a>
            <h3>${item.projName}</h3>
            <p>${item.description}</p>
            <div>
            <p><i class="fa-regular fa-star" data-num='${i}'></i></p>
            <p><i class="fa-regular fa-share-from-square" data-num='${i}'></i></p>
            </div>
        </div>
    `;
    })
    .join("");

  projectDiv.append(searchDiv, projectsDiv);
  return projectDiv;
};
