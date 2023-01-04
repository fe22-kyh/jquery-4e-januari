// let appContainer = document.querySelector(".app");
let appContainer = $("#app");
let appHeader = $(`
  <header>
    <h1>Hey batman</h1>
  </header>
`);


appContainer.append(appHeader);

let header = document.querySelector("header");

appHeader.addClass("app-header");
//header.classList.add("app-header");

const darkTheme = {
  backgroundColor: "#222",
  color: "#fff"
}
const lightTheme = {
  backgroundColor: "#eee",
  color: "#555"
}
appHeader.css(lightTheme);

//header.style.backgroundColor = "#222";
//header.style.color = "#fff";

appHeader
  .on("mouseover", () => appHeader.css(darkTheme))
  .on("mouseout", () => appHeader.css(lightTheme));


let newAppHeader = $(`
  <header>
    <h3>Hey batman v2</h3>
    <p>This is so much cooler</p>
  </header>
`);

//let currentAppHeader = appHeader;

// appHeader // buggar, fixa gärna!
//   .on("mouseover", () => currentAppHeader = appHeader.replaceWith(newAppHeader))
//   .on("mouseout", () => newAppHeader.replaceWith(currentAppHeader));

//let oldContent = appHeader.replaceWith(newAppHeader);

//newAppHeader.replaceWith(oldContent);

appContainer
  .append($(`<p class='para'>Item 1</p>`))
  .append($("<p class='para' x-data='important'>Item 2</p>"))
  .append($("<p class='para' x-data='important'>Item 3</p>"))
  .append($("<p class='para'>Item 4</p>"));

let p = $("p[x-data]")
console.log(p);

p.text("Funny item");

// let paras = document.querySelectorAll("button");
// paras.forEach(para => para.textContent = "funny item");