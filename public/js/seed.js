var mongooseSeeder = require('mongoose-seed');


// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Question',
        'documents': [
            {
                _id : 1,
                author    : "anonymous",
                created_date      : new Date(),
                label     : "When should you store state on an aggregate?",
                answer_choices : [
                    "Whenever there's a new field on an even the domain is listening to",
                    "Never",
                    "When it's needed to process business logic in the aggregate",
                    "Always",
                    "When it is needed by the read side"
                ],
                correct_answers : ["When it's needed to process business logic in the aggregate"]
            }
        ]
    }
];

exports.seedDB = function(){
    mongooseSeeder.connect('mongodb://localhost/sample-dev', function(){
        mongooseSeeder.loadModels(['./public/js/question.js']);
        // Clear specified collections
        console.log("Start seeding DB");
        mongooseSeeder.clearModels(['Question'], function() {
            // Callback to populate DB once collections have been cleared
            mongooseSeeder.populateModels(data);
        });
        console.log("Done seeding DB");
    });
};
