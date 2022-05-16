`use strict`;

// Finding if a key is clicked
// If clicked, returns the data-key value
const keys = document.getElementsByClassName("key");
const audio = document.getElementsByTagName("audio");
Array.from(keys).forEach((element) => {
  element.addEventListener("click", () => {
    const keyCode = element.getAttribute("data-key");

    // Adds 'playing' class for the visual effects
    element.classList.add("playing");
    // Removes 'playing' class after 100ms
    setTimeout(() => element.classList.remove("playing"), 100);
  });
});
