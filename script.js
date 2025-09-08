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
    "Committed to maintaining an active and healthy lifestyle through regular workouts",
    "Enthusiast of MMA and other combat sports, continuously learning and honing techniques",
    "Passionate about anime and manga, inspired by compelling stories, character and world-building",
    "Dedicated RPG gamer, exploring immersive stories and strategic gameplay, and hoping to one day create my own game.",
    "History enthusiast who enjoys uncovering and understanding events from the past"
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