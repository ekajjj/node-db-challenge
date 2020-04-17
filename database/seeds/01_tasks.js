exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('tasks').insert([
                {
                    id: 1,
                    description: 'Stare at the screen for a while',
                    notes: '',
                    completed: false,
                    project_id: 1
                },
                {
                    id: 2,
                    description: 'Maybe get your brain working',
                    notes: '',
                    completed: false,
                    project_id: 1
                },
                { id: 3, 
                  description: 'Drink more coffee', 
                  notes: '', 
                  completed: false,
                  project_id: 2 
                },
                { id: 4, 
                  description: 'Bang your head against desk', 
                  notes: '', 
                  completed: false,
                  project_id: 2 
                },
                { id: 5, 
                  description: 'Do fuckall for the rest of the day', 
                  notes: '', 
                  completed: false,
                  project_id: 3 
                }
            ]);
        });
};
