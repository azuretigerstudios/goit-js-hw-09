// main.js — entry file for index.html
// This file runs automatically when you open the homepage of the project
console.log("main.js loaded successfully!");

// Optional: Add a small dynamic UI enhancement (like highlighting links)
const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#00bfff";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});
