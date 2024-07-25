/* This script processes the answers read when validating the form */
function processAnswers(answers) {
    let scores = new Map();
    scores.set("attack", answers[0] + answers[9]);
    scores.set("defense", answers[1] + answers[7]);
    scores.set("underdog", answers[2] + answers[5]);
    scores.set("success", answers[4] + answers[8]);
    scores.set("story", answers[3] + answers[6]);

    let bestCategory = "";
    let maxScore = 0;

    for (let [key, value] of scores) {
        if (value > maxScore) {
            maxScore = value;
            bestCategory = key;
        }
    }

    return bestCategory;
}