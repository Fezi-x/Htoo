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
