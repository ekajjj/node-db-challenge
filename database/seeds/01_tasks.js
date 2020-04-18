exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('tasks').insert([
                {
                    id: 1,
                    description: 'Asdasd',
                    notes: '',
                    completed: false,
                    project_id: 1
                },
                {
                    id: 2,
                    description: 'Asdasdasdasdasd',
                    notes: '',
                    completed: false,
                    project_id: 1
                },
                { id: 3, 
                  description: 'ASdasdasdasd', 
                  notes: '', 
                  completed: false,
                  project_id: 2 
                },
                { id: 4, 
                  description: 'ASasdasdasdasd', 
                  notes: '', 
                  completed: false,
                  project_id: 2 
                },
                { id: 5, 
                  description: 'Asdasdasd', 
                  notes: '', 
                  completed: false,
                  project_id: 3 
                }
            ]);
        });
};
