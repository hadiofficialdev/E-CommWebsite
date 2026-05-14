
const themeToggle = document.querySelector("#theme_toggle");
const logoLight = document.querySelector(".logo");
const logoDark = document.querySelector(".footerlogo");

const theme = localStorage.getItem("theme");

// apply theme on load
if (theme === "dark") {
  document.body.classList.add("dark_theme");
  themeToggle.checked = true;

  logoLight.src = "/images/logoFooterfinal-removebg-preview.png";
  logoDark.src = "/images/logo-removebg-preview.png";
}

// toggle theme
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark_theme");

  const isDark = document.body.classList.contains("dark_theme");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  if (isDark) {
    logoLight.src = "/images/logoFooterfinal-removebg-preview.png";
    logoDark.src = "/images/logo-removebg-preview.png";
  } else {
    logoLight.src = "/images/logo-removebg-preview.png";
    logoDark.src = "/images/logoFooterfinal-removebg-preview.png";
  }
});