const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

// Load saved theme (default: dark)
let saved = "dark";
try {
  saved = localStorage.getItem("theme") || "dark";
} catch (e) {}
root.setAttribute("data-theme", saved);

// Toggle dark / light
toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();