// YOUR CODE HERE
const button = document.querySelector("#btn1");
const outputText = document.querySelector("#output1");
const button1 = document.querySelector("#btn2");
const textoutout = document.querySelector("#output2");
const button2 = document.querySelector("#btn3");
const para = document.querySelector("#output3 p");
const button3 = document.querySelector("#btn4");
const paragraph = document.querySelectorAll("#output4 p");
const button4 = document.querySelector("#btn5");
const inputField = document.querySelector("#message");

button.addEventListener("click", function () {
  outputText.style.color = "red";
});

button1.addEventListener("click", function () {
  const newSpan = document.createElement("span");
  newSpan.textContent = "Hello word";
  output2.appendChild(newSpan);
});

button2.addEventListener("click", function () {
  para.classList.remove("small-text");
});

button3.addEventListener("click", function () {
  paragraph.forEach(function (paragraph) {
    paragraph.style.color = "red";
  });
});

button4.addEventListener("click", function () {
  const inputValue = inputField.value;
  console.log(inputValue);
});
