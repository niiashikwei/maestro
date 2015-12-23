//requires
var express = require('express');
var bodyParser = require('body-parser');

//initializers
var jsonParser = bodyParser.json();
var app = express();

//business logic
var ta = require('./public/js/ta');

//content
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
    response.render('pages/index', {question: question});
});

app.post('/', jsonParser, function(request, response) {
    console.log("REQUEST: %j", request.body);
    var submittedAnswer = request.body[question.label];
    var result = ta.gradeQuestion(submittedAnswer, question);
    response.render('pages/results', {result: result});
});

//finally
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


