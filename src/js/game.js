import { DOMSelectors } from "./DOM";
import { questionsList } from "./questions.js";
import { question1 } from "./questionFunctions.js";
import { question2 } from "./questionFunctions.js";
import { question3 } from "./questionFunctions.js";
import { question4 } from "./questionFunctions.js";
import { question5 } from "./questionFunctions.js";
import { question6 } from "./questionFunctions.js";
import { question7 } from "./questionFunctions.js";
import { question8 } from "./questionFunctions.js";
import { question9 } from "./questionFunctions.js";
import { question10 } from "./questionFunctions.js";

//QUESTIONS 1-6
question1();

document.getElementById("choice1").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice1");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question2();
  });
});

document.getElementById("choice2").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice2");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question3();
  });
});

document.getElementById("choice3").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice3");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question4();
  });
});

document.getElementById("choice4").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice4");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question5();
  });
});

document.getElementById("choice5").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice5");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question6();
  });
});

document.getElementById("choice6").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice6");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question6();
  });
});

document.getElementById("choice7").addEventListener("click", function () {
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }

  let addGreen = document.getElementById("choice7");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  document.getElementById("nextButton").addEventListener("click", function () {
    question6();
  });
});

//listen for click, if choice x then question2();

//console.log(DOMSelectors.displayContainer);

/* ssssssssssss */
