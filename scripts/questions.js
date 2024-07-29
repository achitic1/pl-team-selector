/* This script loads the questions on to the page */
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

      newQuestion.classList.add("hidden");
      questionsList.appendChild(newQuestion);
    }

    // Creating and hiding the submit button
    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.classList.add("hidden");
    questionsList.appendChild(submitButton);
  }

  document.addEventListener('DOMContentLoaded', createQuestions);
})();
