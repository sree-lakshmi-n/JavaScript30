`use strict`;

// Finding if a key is clicked
// If clicked, returns the data-key value
const keys = document.getElementsByClassName("key");
const audio = document.getElementsByTagName("audio");

Array.from(keys).forEach((element) => {
  element.addEventListener("click", () => {
    const keyCode = element.getAttribute("data-key");
    checkKeyCode(keyCode);
    // Adds 'playing' class for the visual effects
    element.classList.add("playing");
    // Removes 'playing' class after 100ms
    setTimeout(() => element.classList.remove("playing"), 100);
  });
});
// Checking for the audio element with the clicked key keyCode
// If found, log the keyCode
const checkKeyCode = (keyCode) => {
  Array.from(audio).forEach((element) => {
    const audioKey = element.getAttribute("data-key");
    if (keyCode === audioKey) console.log(audioKey);
  });
};
