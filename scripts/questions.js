/* This script loads the questions on to the page */
(function() {
  function createQuestions() {
    const questionsList = document.querySelector("form");
    const questions = [
      "You're action oriented", 
      "You are tidy and clean", 
      "You cheer for an underdog",
      "You appreciate history", 
      "You crave success", 
      "You feel like you exceed expectations",
      "You like a good story", 
      "You don't like change", 
      "You're business oriented",
      "You consider yourself an artist"
    ];

    const answerChoices = new Map([
      [1, "No"],
      [2, "Somewhat"],
      [3, "Yes"]
    ]);

    for (let i = 0; i < questions.length; i++) {
      let newQuestion = document.createElement("fieldset");

      // Create the question title
      let questionTitle = document.createElement("h2");
      questionTitle.textContent = `${i + 1}. ${questions[i]}`;
      newQuestion.appendChild(questionTitle);

      // Create the options for answers
      for (let j = 1; j <= 3; j++) {
        let label = document.createElement("label");
        
        let input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", `question-${i}`);
        input.setAttribute("value", j);

        label.appendChild(input);
        label.append(answerChoices.get(j));
        newQuestion.appendChild(label);
        newQuestion.appendChild(document.createElement("br"));
      }

      questionsList.appendChild(newQuestion);
    }

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    questionsList.appendChild(submitButton);
  }

  document.addEventListener('DOMContentLoaded', createQuestions);
})();
