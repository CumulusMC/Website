window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("a#header").addEventListener("click", (event) => {
    document.querySelector("header").classList.toggle("shown");
    document.querySelector("a#header").classList.toggle("shown");
  });
});
