var numeral = require('numeral');

exports.gradeQuestions = function(submittedQuestionAnswersMap, jsonQuestions){
    console.log("jsonQuestions: %s", jsonQuestions);
    var totalNumberOfQuestions = jsonQuestions.length;
    var totalPoints = numeral(0);

    for (i=0; i < jsonQuestions.length; i++) {
        var points;
        if(jsonQuestions[i].correct_answers.length == 1){
            points = gradeSingleChoiceQuestion(jsonQuestions[i], submittedQuestionAnswersMap);
            totalPoints.add(points);
            continue;
        }

        points = gradeMultiChoiceQuestion(jsonQuestions[i], submittedQuestionAnswersMap);
        totalPoints.add(points);
    }

    return totalPoints.format('0.00') + "/" + totalNumberOfQuestions;
};

function gradeMultiChoiceQuestion(storedQuestion, submittedAnswers ){
    var totalPoints = numeral(0);
    var maxPoints = storedQuestion.correct_answers.length;
    var arrayOfCorrectAnswers = JSON.stringify(storedQuestion.correct_answers);
    var answersInSubmission = submittedAnswers[storedQuestion.id];

    if(typeof answersInSubmission === 'string'){
        if (arrayOfCorrectAnswers.indexOf(answersInSubmission) != -1){
            totalPoints.add(1);
        }
    }

    if(typeof answersInSubmission == 'object'){
        for(i = 0; i < answersInSubmission.length; i++){
            if(arrayOfCorrectAnswers.indexOf(answersInSubmission[i]) != -1){
                totalPoints.add(1);
            }
        }
    }

    if(typeof answersInSubmission == 'undefined'){
        console.log("answersInSubmission is undefined");
    }

    return totalPoints.divide(maxPoints);
}

function gradeSingleChoiceQuestion(storedQuestion, submittedAnswers) {
    var arrayOfCorrectAnswers = storedQuestion.correct_answers;
    var answerInSubmission = submittedAnswers[storedQuestion.id];
    console.log("question being graded: %s", storedQuestion.id);
    console.log("arrayOfCorrectAnswers: %s", arrayOfCorrectAnswers);
    console.log("answerInSubmission: %s", answerInSubmission);

    if (arrayOfCorrectAnswers[0] == answerInSubmission) {
        return 1;
    }
    return 0;
}
