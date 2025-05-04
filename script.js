document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.getElementById("chat-button");
  const mainScreen = document.getElementById("main-screen");
  const hackedScreen = document.getElementById("hacked-screen");
  const matrixOutput = document.getElementById("matrix-output");

  const matrixWords = [
    "ACCESS GRANTED",
    "INITIALIZING...",
    "LOADING MODULE...",
    "CONNECTED TO CEDRICNET",
    "DATA STREAM OPENED",
    "DOWNLOADING LOCATION",
    "CEDRIC IS WATCHING",
    "///// SYSTEM OVERRIDE /////",
    "TRACE INITIATED",
    "WELCOME USER"
  ];

  chatButton.addEventListener("click", () => {
    // Hide the main screen and show the hacked screen
    mainScreen.classList.add("hidden");
    hackedScreen.classList.remove("hidden");

    // Begin fake hacking animation
    let index = 0;

    const interval = setInterval(() => {
      if (index >= matrixWords.length) {
        clearInterval(interval);
        return;
      }

      // Simulate typing a line with a little randomness
      const line = matrixWords[index];
      matrixOutput.innerHTML += line + "\n";
      index++;
    }, 600);
  });
});
