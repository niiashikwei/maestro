//requires
var express = require('express');
var bodyParser = require('body-parser');

//initializers
var jsonParser = bodyParser.json();
var app = express();

//business logic
var ta = require('./public/js/ta');
var questions = require('./public/js/questions');

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
    response.render('pages/index', {question: questions.getQuizQuestion()});
});

app.post('/', jsonParser, function(request, response) {
    console.log("REQUEST: %j", request.body);
    var result = ta.gradeQuestion(request.body, questions.getQuizQuestion());
    response.render('pages/results', {result: result});
});

//finally
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


