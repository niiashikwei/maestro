var numeral = require('numeral');

exports.gradeQuestions = function(requestBody, questions){
    var totalPoints = numeral(0);
    var totalNumberOfQuestions = questions.length;

    for (i = 0; i < questions.length; i++){
        var correctAnswers = questions[i].correct_answers;
        var submittedAnswers;
        if (correctAnswers > 1){
            submittedAnswers = requestBody[questions[i].label];
        }else{
            submittedAnswers = [requestBody[questions[i].label]];
        }
        var currentPoints = numeral(0);

        var maxPoints = numeral(correctAnswers.length);
            for (i = 0; i < correctAnswers.length; i++){
                var currentCorrectAnswer = correctAnswers[i];

                for (k = 0; k < submittedAnswers.length; k++) {
                    var currentSubmittedAnswer = submittedAnswers[k];
                    if (currentCorrectAnswer == currentSubmittedAnswer){
                        currentPoints.add(1);
                        break;
                    }
                }
            }
            var pointsForMultiChoiceQuestion = numeral(currentPoints).divide(maxPoints);
            console.log("pointsForMultiChoiceQuestion: " + pointsForMultiChoiceQuestion);
            totalPoints = totalPoints.add(pointsForMultiChoiceQuestion);
        console.log("totalPoints: " + totalPoints);
    }

    return totalPoints.format('0.00') + "/" + totalNumberOfQuestions;
};

