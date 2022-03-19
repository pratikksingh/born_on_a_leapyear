console.log("index js file is being loaded");

const dateOfBirth = document.querySelector("#dateRequired");
const output = document.querySelector("#output");
const checkButton = document.querySelector("#btn");

checkButton.addEventListener("click", function leapYearOrNot() {
  console.log("inside event listener");
  document.getElementById("output").innerText = " ";

  let dateOfBirthString = dateOfBirth.value.toString();

  let requiredFormat = dateOfBirthString.split("-")[0];

  if (requiredFormat === "") {
    document.getElementById("output").innerText = "Enter the date first!";
  } else if (
    (requiredFormat % 4 === 0 && requiredFormat % 100 != 0) ||
    requiredFormat % 400 === 0
  ) {
    document.getElementById("output").innerText = "Leap year!";
  } else {
    document.getElementById("output").innerText = "Non-Leap year!";
  }
});
