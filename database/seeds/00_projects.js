exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([
                {
                    id: 1,
                    name: 'Numero uno',
                    description: 'asdf',
                    completed: false
                },
                {
                    id: 2,
                    name: 'Dos',
                    description: 'asdfasdf',
                    completed: false
                },
                {
                    id: 3,
                    name: 'Tres',
                    description: 'asdasdasdasd',
                    completed: false
                }
            ]);
        });
};
