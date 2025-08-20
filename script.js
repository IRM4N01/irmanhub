// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Fun Fact Button
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