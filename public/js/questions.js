var mongoose = require('mongoose');

exports.getQuizQuestions = function(callback){
    var Question = mongoose.model('Question');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("connected to mongoDB!")
    });
    Question.find(function(err, questions){
        if(typeof callback == "function"){
            callback(questions);
        }
    });
};