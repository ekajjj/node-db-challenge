exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('resources').insert([
                { id: 1, name: 'Test', description: '' },
                { id: 2, name: 'Testing', description: '' },
                { id: 3, name: 'Test here', description: '' },
                { id: 4, name: 'Test now', description: '' },
                { id: 5, name: 'Test wow', description: '' }
            ]);
        });
};
