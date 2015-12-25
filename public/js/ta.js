
exports.gradeQuestions = function(requestBody, questions){
    var answeredCorrectly = 0;
    var totalNumberOfQuestions = questions.length;

    for (i = 0; i < questions.length; i++){
        var submittedAnswer = requestBody[questions[i].label];
        var correctAnswers = questions[i].correct_answers;
        var isCorrectAnswer = ( correctAnswers.length == 1) &&
                              ( correctAnswers[0] == submittedAnswer);
        if (isCorrectAnswer) {
            answeredCorrectly++;
        }
        console.log("submittedAnswer:" + submittedAnswer);
        console.log("isCorrectAnswer: " + isCorrectAnswer);
    }

    return answeredCorrectly + "/" + totalNumberOfQuestions;
};

