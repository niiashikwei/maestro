//requires
var express = require('express');
var bodyParser = require('body-parser');

var _ = require('lodash');

//initializers
var jsonParser = bodyParser.json();

var mongoose = require('mongoose');
var questionSchema = require('./public/js/question');
var seeder = require('./public/js/seed');
var question = require('./public/js/questions');
var ta = require('./public/js/ta');

const MONGODB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/maestro-dev';
seeder.seedDB(MONGODB_URI);
mongoose.set('debug', true);
mongoose.connect(MONGODB_URI,{server: { poolSize: 2 } }, function(){
   console.log("connected to mongodb");
});

var app = express();

//configurations
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//routing
app.get('/', jsonParser, function(request, response) {
    question.getQuizQuestions(function(quizQuestions){
        response.render('pages/index', {questions: quizQuestions});
    });
});

app.post('/', jsonParser, function(request, response) {
    console.log(request.body);
    question.getQuizQuestions(function(quizQuestions){
        var result = ta.gradeQuestions(request.body, quizQuestions);
        response.render('pages/results', {result: result});
    });
});

//finally
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


