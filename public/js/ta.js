
exports.gradeQuestion = function(submittedAnswer, question){
    var result = "incorrect :-(";
    var correctAnswers = question.correct_answers;
    var isCorrectAnswer = ( correctAnswers.length == 1) &&
                          ( correctAnswers[0] == submittedAnswer);
    console.log("submittedAnswer:" + submittedAnswer);
    console.log("isCorrectAnswer: " + isCorrectAnswer);
    if (isCorrectAnswer) {
        result = "correct :-)";
    }
    return result;
};