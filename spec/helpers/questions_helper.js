module.exports = {
    questions: [{
        author: 'anonymous',
        answer_choices: ['Whenever there\'s a new field on an event the domain is listening to',
            'Never',
            'When it\'s needed to process business logic in the aggregate',
            'Always',
            'When it is needed by the read side'],
        correct_answers: ['When it\'s needed to process business logic in the aggregate'],
        label: 'When should you store state on an aggregate?'
        },
        {
            author: 'anonymous',
            answer_choices: ['Whenever it needs to look up a value that\'s stored on the read-side but not the write-side',
                'Never',
                'When it\'s needed to process business logic in the aggregate',
                'Always',
                'when the aggregate needs to modify a read-side value as a result of an event it\'s listening to'],
            correct_answers: ['Never'],
            label: 'When should the Aggregate have access to the read repository?'
        },
        {
            author: 'anonymous',
            answer_choices: ['Having a true history of the system and providing benefits such as audit and traceability (required by law in some fields)',
                'It forces you to use good architecture patterns',
                'Ability to put the system in any prior state',
                'The kind of operations made on an event store is very limited, making the persistence very predictable and thus easing testing',
                'It has none',
                'Although it makes it difficult to respond to new requirements, it compensates by allowing you to scale your application rapidly!'],
            correct_answers: ['Ability to put the system in any prior state',
                'The kind of operations made on an event store is very limited, making the persistence very predictable and thus easing testing',
                'Having a true history of the system and providing benefits such as audit and traceability (required by law in some fields)'],
            label: 'What are some advantages of event sourcing?'
        },
        {
            author: 'anonymous',
            answer_choices: ['A class that allows you to cast a spell on your architecture, making it magical',
                'A way to reference a superclass',
                'A class that tells your framework how to convert an older version of an event into a newer version',
                'A special kind of event',
                'A class that transforms a provided class into the correct type needed by a method'],
            correct_answers: ['A class that tells your framework how to convert an older version of an event into a newer version'],
            label: 'In the context of the Axon framework, what is an upcaster?'
        },
        {
            author: 'anonymous',
            answer_choices: ['When a field name on your event changes',
                'When you add a new method to your event',
                'When the field type on your event changes',
                'When you create a new event',
                'When you change the name of your event',
                'You never actually need to, its optional'],
            correct_answers: ['When a field name on your event changes',
                'When you change the name of your event',
                'When the field type on your event changes'],
            label: 'When do you need to write an upcaster in an event driven framework such as Axon?'
        }],

    submittedTest: {
        '1': 'When it\'s needed to process business logic in the aggregate',
        '2': 'when the aggregate needs to modify a read-side value as a result of an event it\'s listening to',
        '3': ['Ability to put the system in any prior state',
            'The kind of operations made on an event store is very limited, making the persistence very predictable and thus easing testing'],
        '4': 'A class that tells your framework how to convert an older version of an event into a newer version',
        '5': ['When the field type on your event changes',
            'When you create a new event',
            'You never actually need to, its optional']
    }
}

