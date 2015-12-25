var mongoose = require('mongoose');

var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var QuestionSchema = new Schema({
    _id : { type: Number },
    author    : { type: String, default: 'anonymous'},
    created_date      : Date,
    label     : String,
    answer_choices : Array,
    correct_answers : Array
});

Question = mongoose.model('Question', QuestionSchema);

exports.questionModel = Question;