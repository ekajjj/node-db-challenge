module.exports = {

    development: {
      client: 'sqlite3',
      connection: {
        filename: './database/projectsDB.sqlite3'
      },
      migrations: {
        directory: './database/migrations'
      },
      seeds: {
        directory: './database/seeds'
      },
      useNullAsDefault: true
    },
  
  };