console.log("Portfolio Loaded Successfully!");

// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Add shadow to nav on scroll for modern effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 20) {
    nav.style.boxShadow = "0 3px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});
