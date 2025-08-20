// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Fun Fact Button - update facts to proper ones later
const factBtn = document.getElementById("fun-fact-btn");
const factDisplay = document.getElementById("fun-fact");

const facts = [
    "fun fun fun fun",
    "fact fact fact fact",
    "put proper facts in later",
    "software engineer"
];

factBtn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = randomFact;
});

//Form Validaiton
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.")
});