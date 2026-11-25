const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.dataset.theme !== "light";
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  themeToggle.textContent = isLight ? "☾" : "☼";
});

document.getElementById("year").textContent = new Date().getFullYear();

// The form opens the visitor's email app. It does not send or store messages.
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  document.getElementById("formNote").textContent =
    "Your email app should open. Update the sample email address in index.html first.";
});
