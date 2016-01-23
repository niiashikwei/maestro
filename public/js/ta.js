var numeral = require('numeral');

exports.gradeQuestions = function(submittedQuestionAnswersMap, jsonQuestions){
    var totalNumberOfQuestions = jsonQuestions.length;
    var totalPoints = numeral(0);

    var i;
    for (i=0; i < jsonQuestions.length; i++) {
        var currentQuestion = jsonQuestions[i];
        console.log("question being graded: %s", currentQuestion.id);
        console.log("arrayOfCorrectAnswers: %s", currentQuestion.correct_answers);
        var points;
        if(currentQuestion.correct_answers.length == 1){
            points = gradeSingleChoiceQuestion(currentQuestion, submittedQuestionAnswersMap);
            totalPoints.add(points);
            continue;
        }

        points = gradeMultiChoiceQuestion(currentQuestion, submittedQuestionAnswersMap);
        totalPoints.add(points);
    }

    return totalPoints.format('0.00') + "/" + totalNumberOfQuestions;
};

function gradeMultiChoiceQuestion(storedQuestion, submittedAnswers ){
    var totalPoints = numeral(0);
    var maxPoints = storedQuestion.correct_answers.length;
    var arrayOfCorrectAnswers = JSON.stringify(storedQuestion.correct_answers);
    var answersInSubmission = submittedAnswers[storedQuestion.id];
    console.log("answersInSubmission is " + typeof answersInSubmission);

    if(typeof answersInSubmission == 'undefined'){
        console.log("answersInSubmission is undefined");
    }

    if(typeof answersInSubmission === 'string'){
        if (arrayOfCorrectAnswers.indexOf(answersInSubmission) != -1){
            console.log("answersInSubmission: %s", answersInSubmission);
            totalPoints.add(1);
        }
    }

    else if(typeof answersInSubmission === 'object'){
        var i;
        for(i = 0; i < answersInSubmission.length; i++){
            console.log("answerInSubmission: %s", answersInSubmission[i]);
            if(arrayOfCorrectAnswers.indexOf(answersInSubmission[i]) != -1){
                totalPoints.add(1);
            }else{
                if(totalPoints.value() >= 1){
                    totalPoints.subtract(1);
                }
            }
        }
    }

    return totalPoints.divide(maxPoints);
}

function gradeSingleChoiceQuestion(storedQuestion, submittedAnswers) {
    var arrayOfCorrectAnswers = storedQuestion.correct_answers;
    var answerInSubmission = submittedAnswers[storedQuestion.id];
    console.log("answerInSubmission: %s", answerInSubmission);

    if (arrayOfCorrectAnswers[0] == answerInSubmission) {
        return 1;
    }
    return 0;
}
