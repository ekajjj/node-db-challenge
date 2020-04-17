exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([
                {
                    id: 1,
                    name: 'Finish MVP',
                    description: 'Do it',
                    completed: false
                },
                {
                    id: 2,
                    name: 'Finish Stretch',
                    description: 'Maybe do it',
                    completed: false
                },
                {
                    id: 3,
                    name: 'Jack shit',
                    description: 'Definitely do it',
                    completed: false
                }
            ]);
        });
};
