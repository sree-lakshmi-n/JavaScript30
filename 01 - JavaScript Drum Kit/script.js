`use strict`;

// Finding if a key is clicked
// If clicked, returns the data-key value
const keys = document.getElementsByClassName("key");
Array.from(keys).forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.getAttribute("data-key"));
  });
});
