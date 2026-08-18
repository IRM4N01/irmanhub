// =====================
// DARK MODE TOGGLE
// =====================
const toggleBtn = document.getElementById("toggle-dark");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️ Light" : "🌙 Dark";
});


// =====================
// ACTIVE NAV LINK (highlights current section)
// =====================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const observerNav = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => observerNav.observe(section));


// =====================
// SCROLL REVEAL ANIMATION
// =====================
const revealEls = document.querySelectorAll(".reveal");

const observerReveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerReveal.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observerReveal.observe(el));


// =====================
// TYPEWRITER EFFECT (hero tagline)
// =====================
const phrases = [
  "Learning by building, one project at a time.",
  "From hospitality to code — the journey continues.",
  "HTML · CSS · JavaScript · Growing every day.",
];

const typedEl = document.getElementById("typed-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 60;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedEl.textContent = currentPhrase.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentPhrase.slice(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at end of phrase
    setTimeout(() => { isDeleting = true; }, 2000);
    typingSpeed = 40;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 60;
  }

  setTimeout(type, typingSpeed);
}

// Start after hero animations settle
setTimeout(type, 1200);


// =====================
// SMOOTH SCROLL (nav links)
// =====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// =====================
// FUN FACT BUTTON
// =====================
const factBtn = document.getElementById("fun-fact-btn");
const factDisplay = document.getElementById("fun-fact");
const facts = [
  "Gym time is my happy hour — fitness keeps me energised.",
  "MMA and combat sports enthusiast.",
  "Passionate about anime and manga.",
  "Dedicated RPG gamer, aspiring game creator.",
  "History enthusiast — love learning what came before.",
];

let lastFact = null;

factBtn.addEventListener("click", () => {
  let randomFact;
  do {
    randomFact = facts[Math.floor(Math.random() * facts.length)];
  } while (randomFact === lastFact && facts.length > 1);

  factDisplay.style.opacity = "0";
  setTimeout(() => {
    factDisplay.textContent = randomFact;
    factDisplay.style.opacity = "1";
  }, 200);
  lastFact = randomFact;
});


// =====================
// CONTACT FORM — EMAILJS
// =====================
emailjs.init("m5tXN85Jvl4hJqyPI");

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const oldMsg = form.parentNode.querySelector(".confirmation-msg");
  if (oldMsg) oldMsg.remove();

  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  const formData = {
    from_name: form.querySelector('input[type="text"]').value,
    from_email: form.querySelector('input[type="email"]').value,
    message: form.querySelector("textarea").value,
  };

  emailjs.send("service_hvj4igh", "template_qpuyj7g", formData)
    .then(() => {
      form.reset();
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;

      const confirmation = document.createElement("p");
      confirmation.textContent = "✅ Thanks for reaching out! I'll get back to you soon.";
      confirmation.classList.add("confirmation-msg");
      form.parentNode.appendChild(confirmation);
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;

      const confirmation = document.createElement("p");
      confirmation.textContent = "❌ Something went wrong. Please try again.";
      confirmation.classList.add("confirmation-msg");
      confirmation.style.color = "red";
      form.parentNode.appendChild(confirmation);
    });
});