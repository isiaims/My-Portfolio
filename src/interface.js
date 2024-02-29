import { announcements } from "./logic";
// import Pfp from "./pfp.jpg";

export function makeBodyElements() {
  const container = document.createElement("div");
  container.classList.add("container");
  const header = document.createElement("header");
  header.append(head());
  const main = document.createElement("main");
  const aside = document.createElement("aside");
  aside.append(announce(), socials());
  const content = document.createElement("div");
  main.append(aside, content);

  container.append(header, main);
  document.body.append(container);
}
const head = function makeHeaderElements() {
  const nav = document.createElement("nav");
  const userImg = new Image();
  //   userImg.src = Pfp;
  const div = document.createElement("div");
  div.classList.add("user");
  const p = document.createElement("p");
  p.innerHTML = "Hello There,";
  const h2 = document.createElement("h2");
  const span = document.createElement("span");
  span.innerHTML = "(Front-End Developer)";
  h2.innerHTML = "Isiaka J. Onifade " + span.innerHTML;
  div.append(p, h2);
  nav.append(userImg, div);
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
