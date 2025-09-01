// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
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

let lastFact = null;

factBtn.addEventListener("click", () => {
  let randomFact;
  do {
    randomFact = facts[Math.floor(Math.random() * facts.length)];
  } while (randomFact === lastFact);

  factDisplay.textContent = randomFact;
  lastFact = randomFact;
});

//Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    form.reset();

    const confirmation = document.createElement("p");
    confirmation.textContent = "✅ Thanks for reaching out! I'll get back to you soon.";
    confirmation.style.color = "green";
    confirmation.style.marginTop = "1rem";

    const oldMsg = form.parentNode.querySelector(".confirmation-msg");
    if (oldMsg) oldMsg.remove();

    confirmation.classList.add("confirmation-msg");
    form.parentNode.appendChild(confirmation);
}); 