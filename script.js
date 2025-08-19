
const h2 = document.createElement("h2");
    h2.textContent = "This content added by JavaScript";
    document.querySelector("body").appendChild(h2);

const button = document.createElement("button");
    button.textContent = "Change Background";
    document.body.insertBefore(button, h2);

const gradients = [
      "linear-gradient(135deg, #ff4e50, #fc913a)",
      "linear-gradient(135deg, #ff758c, #ff7eb3)",
      "linear-gradient(135deg, #f00000, #dc281e)",
      "linear-gradient(135deg, #f46b45, #eea849)"
    ];

let current = 0;

button.addEventListener("click", () => {
      current = (current + 1) % gradients.length;
      document.body.style.background = gradients[current];
    });
