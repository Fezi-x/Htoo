const startDate = new Date('2023-07-18');
const today = new Date();
const timeDiff = today - startDate;
const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
document.getElementById('days').textContent = daysTogether;

const correctPassword = "157206";  // Set your password here

function unlockLetter() {
  const passwordInput = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");
  const loveLetter = document.getElementById("loveLetter");
  const passwordForm = document.getElementById("passwordForm");

  if (passwordInput === correctPassword) {
    loveLetter.style.display = "block";  // Show the love letter
    passwordForm.style.display = "none"; // Hide the password form
  } else {
    errorMessage.style.display = "block";  // Show error message
  }
}

const song = document.getElementById("loveSong");
const snowContainer = document.querySelector(".snow-container");
let snowInterval;

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  
  snowflake.style.left = Math.random() * 100 + "%";
  snowflake.style.animationDuration = 2 + Math.random() * 3 + "s";
  snowflake.style.opacity = Math.random();
  snowflake.style.transform = `scale(${Math.random() + 0.5})`;
  
  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

function startSnow() {
  snowInterval = setInterval(createSnowflake, 200);
}

function stopSnow() {
  clearInterval(snowInterval);
  snowContainer.innerHTML = "";
}

song.addEventListener("play", startSnow);
song.addEventListener("pause", stopSnow);
song.addEventListener("ended", stopSnow);

