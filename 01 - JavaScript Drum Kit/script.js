`use strict`;

// Playing by clicking
// Finding if a key is clicked
// If clicked, returns the data-key value
const keys = document.getElementsByClassName("key");

Array.from(keys).forEach((element) => {
  element.addEventListener("click", () => {
    const key = element.getAttribute("data-key");
    const audio = document.querySelector(
      `audio[data-key="${key.toUpperCase()}"]`
    );
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
  const audio = document.querySelector(
    `audio[data-key="${e.key.toUpperCase()}"]`
  );
  const key = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
  if (audio === null) return;
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
  audio.play();
});
