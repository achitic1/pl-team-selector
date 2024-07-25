/* Checks that the user answered all questions when they click the submit button */
document.querySelector("form").addEventListener("submit", (e) => {
  const questions = document.querySelectorAll("fieldset");
  let answers = [];
  let isValid = true;

  questions.forEach((question) => {
    const inputs = question.querySelectorAll(`input[type="radio"]`);
    let hasAnswer = false;
    inputs.forEach((input) => {
      if (input.checked) {
        hasAnswer = true;
        answers.push(input.value);
      }
    });
    if (!hasAnswer) {
      isValid = false;
      answers = [];
    }
  });

  // Do not continue with generating results if form is invalid 
  if (!isValid) {
    e.preventDefault();
    alert("Please answer all of the questions before submitting");
  } else {
    e.preventDefault();
    let bestCategory = processAnswers(answers);
    console.log(bestCategory);
    generateResult(bestCategory);
  }
});
