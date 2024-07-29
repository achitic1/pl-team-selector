/* This script loads the questions on to the page */

// Keeps track of the question the user is answering
let currQuestion = 0;

(function() {
  function createQuestions() {
    const questionsList = document.querySelector("form");
    const questions = [
      "Are you action oriented?", 
      "Are you tidy and clean?", 
      "Do you cheer for an underdog?",
      "Do you appreciate history?", 
      "Do you crave success?", 
      "Do you feel like you exceed expectations?",
      "Do you like a good story?", 
      "Do you not like change?", 
      "Do you consider yourself business oriented?",
      "Do you consider yourself an artist?"
    ];

    const answerChoices = new Map([
      [1, "No"],
      [2, "Somewhat"],
      [3, "Yes"]
    ]);

    for (let i = 0; i < questions.length; i++) {
      const newQuestion = document.createElement("fieldset");

      // Create the question title
      const questionTitle = document.createElement("h2");
      questionTitle.textContent = `${i + 1}. ${questions[i]}`;
      newQuestion.appendChild(questionTitle);

      // Create the options for answers
      for (let j = 1; j <= 3; j++) {
        const label = document.createElement("label");
        
        const input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", `question-${i}`);
        input.setAttribute("value", j);

        label.appendChild(input);
        label.append(answerChoices.get(j));
        newQuestion.appendChild(label);
        newQuestion.appendChild(document.createElement("br"));
      }

      // Hides the questions from the user and only reveals if they answer the previous question
      newQuestion.classList.add("hidden");
      newQuestion.addEventListener("change", () => {
        const answers = questionsList.children[currQuestion].querySelectorAll(`input[type="radio"]`);
        const isAnswered = Array.from(answers).some(answer => answer.checked);

        if (isAnswered) {
          questionsList.children[currQuestion + 1].classList.remove("hidden");
          currQuestion++;
        }
      });
      
      questionsList.appendChild(newQuestion);
    }

    // Creating and hiding the submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.classList.add("hidden");
    questionsList.appendChild(submitButton);
  }

  document.addEventListener('DOMContentLoaded', createQuestions);
})();

// Start button to show the first question and disappear when clicked
const startButton = document.querySelector("#start-button");
startButton.addEventListener("click", () => {
    const firstQuestion = document.querySelector("fieldset");
    firstQuestion.classList.remove("hidden");
    startButton.classList.add("hidden");
;});