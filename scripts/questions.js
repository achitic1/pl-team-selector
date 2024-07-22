/* This script stores question text and loads the text and options into the form */
const questionsList = document.querySelector("form");
const questions = ["You're action oriented", "You are tidy and clean", "You cheer for an underdog",
                   "You appreciate history", "You crave success", "You feel like you exceed expectations",
                   "You like a good story", "You don't like change", "You're business oriented'",
                    "You consider yourself an artist"];

const answerChoices = new Map();
answerChoices.set(1, "No");
answerChoices.set(2,"Somewhat");
answerChoices.set(3, "Yes");

for (i = 0; i < questions.length; i++) {
  let newQuestion = document.createElement("fieldset");

  // Create the question title
  let questionTitle = document.createElement("h2");
  questionTitle.textContent = (i + 1).toString() + ". " + questions[i];
  newQuestion.appendChild(questionTitle);
  questionsList.appendChild(newQuestion);

  // Create the options for answers
  for (j = 1; j < 4; j++)  {
    let label = document.createElement("label");
    let type = "radio";
    let name = "question-" + i.toString();

    //Creating the input elements, 1 represents no, 2, represent somewhat, 3 represents yes
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("value", j);

    label.appendChild(input);
    label.append(answerChoices.get(j));
    newQuestion.appendChild(label);
    newQuestion.appendChild(document.createElement("br"));
  }
}

let submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
questionsList.appendChild(submitButton);