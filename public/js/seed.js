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
                    "Whenever there's a new field on an event the domain is listening to",
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
            },
            {
                _id : 3,
                author    : "anonymous",
                created_date      : new Date(),
                label     : "What are some advantages of event sourcing?",
                answer_choices : [
                    "Having a true history of the system and providing benefits such as audit and traceability (required by law in some fields)",
                    "It forces you to use good architecture patterns",
                    "Ability to put the system in any prior state",
                    "The kind of operations made on an event store is very limited, making the persistence very predictable and thus easing testing",
                    "It has none",
                    "Although it makes it difficult to respond to new requirements, it compensates by allowing you to scale your application rapidly!"
                ],
                correct_answers : [
                    "Ability to put the system in any prior state",
                    "The kind of operations made on an event store is very limited, making the persistence very predictable and thus easing testing",
                    "Having a true history of the system and providing benefits such as audit and traceability (required by law in some fields)"
                ]
            },
            {
                _id : 4,
                author    : "anonymous",
                created_date      : new Date(),
                label     : "In the context of the Axon framework, what is an upcaster?",
                answer_choices : [
                    "A class that allows you to cast a spell on your architecture, making it magical",
                    "A way to reference a superclass",
                    "A class that tells your framework how to convert an older version of an event into a newer version",
                    "A special kind of event",
                    "A class that transforms a provided class into the correct type needed by a method"
                ],
                correct_answers : [
                    "A class that tells your framework how to convert an older version of an event into a newer version"
                ]
            },
            {
                _id : 5,
                author    : "anonymous",
                created_date      : new Date(),
                label     : "When do you need to write an upcaster in an event driven framework such as Axon?",
                answer_choices : [
                    "when a field name on your event changes",
                    "when you add a new method to your event",
                    "when the field type on your event changes",
                    "when you create a new event",
                    "when you change the name of your event",
                    "you never actually need to, its optional"
                ],
                correct_answers : [
                    "when a field name on your event changes",
                    "when you change the name of your event",
                    "when the field type on your event changes"
                ]
            }
        ]
    }
];

exports.seedDB = function(mongodb_uri){
    mongooseSeeder.connect(mongodb_uri, function(){
        // Clear specified collections
        console.log("Start seeding DB");
        mongooseSeeder.clearModels(['Question'], function() {
            // Callback to populate DB once collections have been cleared
            mongooseSeeder.populateModels(data);
        });
        console.log("Done seeding DB");
    });
};
