`use strict`;

// Playing by clicking
// Fetches all the key elements
const keys = document.getElementsByClassName("key");
// Finding if a key is clicked
Array.from(keys).forEach((element) => {
  element.addEventListener("click", () => {
    // Gets the data-key value of the element
    const key = element.getAttribute("data-key");
    // Fetches the corresponding audio element
    const audio = document.querySelector(
      `audio[data-key="${key.toUpperCase()}"]`
    );
    // Play the corresponding audio
    audio.play();
    // Adds 'playing' class for the visual effects
    element.classList.add("playing");
    // Removes 'playing' class after 100ms
    setTimeout(() => element.classList.remove("playing"), 100);
  });
});

// Playing using keyboard
// Checks if a key is pressed
window.addEventListener("keydown", (e) => {
  // Fetches the corresponding audio element
  const audio = document.querySelector(
    `audio[data-key="${e.key.toUpperCase()}"]`
  );
  // Fetches the corresponding div element
  const key = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
  // If the key pressed isn't valid, return
  if (audio === null) return;
  // Added visual effects
  key.classList.add("playing");
  // Visual effects to be removed after 100ms
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
  // Play the corresponding audio
  audio.play();
});
