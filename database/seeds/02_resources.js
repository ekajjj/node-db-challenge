exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('resources').insert([
                { id: 1, name: 'Computer', description: '' },
                { id: 2, name: 'Coffee mug', description: '' },
                { id: 3, name: 'Petable dog', description: '' },
                { id: 4, name: 'Office', description: '' },
                { id: 5, name: 'Obnoxious cat', description: '' }
            ]);
        });
};
