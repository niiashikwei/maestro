//requires
var express = require('express');
var bodyParser = require('body-parser');

//initializers
var jsonParser = bodyParser.json();

var mongoose = require('mongoose');
var seeder = require('./public/js/seed');
var question = require('./public/js/questions');
var ta = require('./public/js/ta');

seeder.seedDB();
mongoose.connect('mongodb://localhost/maestro-dev',{server: { poolSize: 2 } }, function(){
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
    console.log("REQUEST: %j", request.body);
    question.getQuizQuestions(function(quizQuestions){
        response.render('pages/index', {questions: quizQuestions});
    });
});

app.post('/', jsonParser, function(request, response) {
    console.log("REQUEST: %j", request.body);
    question.getQuizQuestions(function(quizQuestions){
        var result = ta.gradeQuestion(request.body, quizQuestions[0]);
        response.render('pages/results', {result: result});
    });
});

//finally
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


