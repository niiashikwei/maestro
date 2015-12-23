
exports.getQuizQuestion = function(){
    var question = {
        label: "When should you store state on an aggregate?",
        answers: [
            "Whenever there's a new field on an even the domain is listening to",
            "Never",
            "When it's needed to process business logic in the aggregate",
            "Always",
            "When it is needed by the read side"
        ],
        correct_answers: ["When it's needed to process business logic in the aggregate"]
    };

    return question;
};