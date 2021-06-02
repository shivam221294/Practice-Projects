const navToggle = document.querySelector(".nav-toggle");
const clickLinks = document.querySelector(".clickLinks");

navToggle.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if (links.classList.contains("show-links")) {
    //   links.classList.remove("show-links");
    // } else {
    //   links.classList.add("show-links");
    // }
    clickLinks.classList.toggle("showLinks");
  });