console.log("Portfolio Loaded Successfully!");

// Dynamic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Add shadow to nav on scroll for modern effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  if (window.scrollY > 20) {
    nav.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// Smooth scroll for all internal links (#about, #projects, etc.)
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple reveal-on-scroll for sections
const revealSections = document.querySelectorAll("section");

const handleReveal = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

// Run on load and on scroll
window.addEventListener("load", handleReveal);
window.addEventListener("scroll", handleReveal);
