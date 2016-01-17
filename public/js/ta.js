var numeral = require('numeral');

exports.gradeQuestions = function(submittedQuestionAnswersMap, jsonQuestions){
    var totalPoints = numeral(0);
    var totalNumberOfQuestions = jsonQuestions.length;

    for (i=0; i < jsonQuestions.length; i++) {
        var arrayOfCorrectAnswers = jsonQuestions[i].correct_answers;
        var answerInSubmission = submittedQuestionAnswersMap[jsonQuestions[i].id];
        console.log("jsonQuestions: %s", jsonQuestions);
        console.log("question being graded: %s", jsonQuestions[i].id);
        console.log("arrayOfCorrectAnswers: %s", arrayOfCorrectAnswers);
        console.log("answerInSubmission: %s", answerInSubmission);

        if (arrayOfCorrectAnswers[0] == answerInSubmission) {
            totalPoints.add(1);
        }
    }

    return totalPoints.format('0.00') + "/" + totalNumberOfQuestions;
};

