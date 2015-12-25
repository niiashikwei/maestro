
exports.gradeQuestion = function(requestBody, question){
    var result = "incorrect :-(";
    var submittedAnswer = requestBody[question.label];
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

