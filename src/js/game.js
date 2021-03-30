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
  //Remove existing green ones
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }
  //Add green
  let addGreen = document.getElementById("choice1");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  //Go to question 2 when next button is clicked
  document.getElementById("nextButton").addEventListener("click", function () {
    question2();

    /*     let choice21 = document.getElementById("choice-2-1");
    console.log(choice21); */

    //QUESTION TWO CHOICES
    document
      .getElementById("choice-2-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-2-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-2-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-2-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-2-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-2-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
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

    //QUESTION THREE CHOICES
    document
      .getElementById("choice-3-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-3-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-3-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-3-4")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-3-4");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
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

    //QUESTION FOUR CHOICES
    document
      .getElementById("choice-4-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-4-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-4-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-4-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-4-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-4-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
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

    //QUESTION FIVE CHOICES
    document
      .getElementById("choice-5-1")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-5-1");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-5-2")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-5-2");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
    document
      .getElementById("choice-5-3")
      .addEventListener("click", function () {
        //Remove existing green ones
        let correct = document.getElementsByClassName("correct");
        //console.log(correct);
        if (correct.length > 0) {
          correct[0].classList.remove("correct");
        }
        //Add green
        let addGreen = document.getElementById("choice-5-3");
        addGreen.classList.add("correct");

        let selectedChoice = 1;
        //Go to question 6 when next button is clicked
        document
          .getElementById("nextButton")
          .addEventListener("click", function () {
            question6();
          });
      });
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

/* sssssssssssss */
