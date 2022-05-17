`use strict`;

// Fetches all the key elements
const keys = document.getElementsByClassName("key");

// Removes the visual effects after the transition ends
// Instead of setTimeout()
const removeTransition = (e) => {
  e.target.classList.remove("playing");
};

// Fetches audio according to the clicked data-key
// Calls transitionAndPlay()
const startDrumOnClick = (element) => {
  //   console.log(element.target);
  // Gets the data-key value of the element
  const key = element.getAttribute("data-key");
  // Fetches the corresponding audio element
  const audio = document.querySelector(
    `audio[data-key="${key.toUpperCase()}"]`
  );
  transitionAndPlay(audio, element);
};

// Finds if a key is clicked or if it's transition has ended
Array.from(keys).forEach((element) => {
  element.addEventListener("transitionend", removeTransition);
  element.addEventListener("click", () => startDrumOnClick(element));
});

// Playing using keyboard
const startDrumKeyBoard = (e) => {
  // Fetches the corresponding audio element
  const audio = document.querySelector(
    `audio[data-key="${e.key.toUpperCase()}"]`
  );
  // Fetches the corresponding div element
  const key = document.querySelector(`div[data-key="${e.key.toUpperCase()}"]`);
  // If the key pressed isn't valid, return
  if (audio === null) return;
  transitionAndPlay(audio, key);
};

// Checks if a key is pressed
window.addEventListener("keydown", startDrumKeyBoard);

// Plays the audio and adds visual effects for 100ms
const transitionAndPlay = (audio, key) => {
  audio.currentTime = 0; // rewind the audio to the start
  // Play the corresponding audio
  audio.play();
  // Adds 'playing' class for the visual effects
  key.classList.add("playing");
  // Removes 'playing' class after 100ms
  //   setTimeout(() => {
  //     key.classList.remove("playing");
  //   }, 100);
};
