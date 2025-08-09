function scrollToSection() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  // Get all sections
  const sections = document.querySelectorAll("section");

  for (let section of sections) {
    const sectionText = section.innerText.toLowerCase();
    if (sectionText.includes(query)) {
      section.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }

  alert("No matching section found.");
}

document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    scrollToSection();
  }
});

const toggleBtn = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  function setTheme(mode) {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      themeIcon.textContent = "🌙";
    } else {
      document.documentElement.classList.remove("dark");
      themeIcon.textContent = "🌞";
    }
    localStorage.setItem("theme", mode);
  }

  // Load saved theme
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  });

  // Toggle on click
  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });

