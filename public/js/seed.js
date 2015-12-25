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
            },
            {
                _id : 2,
                author    : "anonymous",
                created_date      : new Date(),
                label     : "When should the Aggregate have access to the read repository?",
                answer_choices : [
                    "Whenever it needs to look up a value that's stored on the read-side but not the write-side",
                    "Never",
                    "When it's needed to process business logic in the aggregate",
                    "Always",
                    "when the aggregate needs to modify a read-side value as a result of an event it's listening to"
                ],
                correct_answers : ["Never"]
            }
        ]
    }
];

exports.seedDB = function(){
    mongooseSeeder.connect('mongodb://localhost/sample-dev', function(){
        // Clear specified collections
        console.log("Start seeding DB");
        mongooseSeeder.clearModels(['Question'], function() {
            // Callback to populate DB once collections have been cleared
            mongooseSeeder.populateModels(data);
        });
        console.log("Done seeding DB");
    });
};
