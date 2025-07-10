document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.getElementById("chat-button");
  const mainScreen = document.getElementById("main-screen");
  const hackedScreen = document.getElementById("hacked-screen");
  const matrixOutput = document.getElementById("matrix-output");

  const matrixWords = [
    "ACCESS GRANTED",
    "INITIALIZING...",
    "LOADING MODULE...",
    "CONNECTED TO FREE RABAX",
    "DATA STREAM OPENED",
    "DOWNLOADING LOCATION",
    "ACCESSING IP ADDRESS",
    "///// SYSTEM OVERRIDE /////",
    "USER RECOGNIZED"
  ];

  const hackerWords = [
    "ROOT", "HACKER", "BYPASS", "ENCRYPTED", "SYSTEM ERROR", "ERROR 404", 
    "DECRYPTING", "REBOOT", "ACCESS DENIED", "PASSWORD REQUIRED", "EXECUTING", 
    "UNLOCKING", "OVERRIDE", "SCAN COMPLETE", "SECURITY BREACH"
  ];

  // Function to type text one character at a time
  function typeWriterEffect(text, index, callback) {
    if (index < text.length) {
      matrixOutput.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeWriterEffect(text, index, callback), 30); // Faster typing speed
    } else {
      callback();
    }
  }

  // Function to generate random hacker-like words
  function generateHackerWords() {
    setInterval(() => {
      const randomWord = hackerWords[Math.floor(Math.random() * hackerWords.length)];
      matrixOutput.innerHTML += randomWord + " ";
    }, 400); // Adding a word every 400ms
  }

  chatButton.addEventListener("click", () => {
    // Hide the main screen and show the hacked screen
    mainScreen.classList.add("hidden");
    hackedScreen.classList.remove("hidden");

    // Force fullscreen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome and Safari
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }

    // Start the fake hack animation
    let index = 0;

    const interval = setInterval(() => {
      if (index >= matrixWords.length) {
        clearInterval(interval);
        generateHackerWords(); // Start generating random words after "WELCOME USER"
        return;
      }

      // Type each line with a delay
      const line = matrixWords[index];
      typeWriterEffect(line, 0, () => {
        matrixOutput.innerHTML += "\n"; // Add line break after each message
      });
      index++;
    }, 800); // Adjust time for each line to appear
  });
});
