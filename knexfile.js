
module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: "./retrodb.sqlite"
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
    }/* ,
  
    staging: {
      client: 'sqlite3',
      connection: {
        database: 'retro-data',
        user: '',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
    },
  
    production: {
      client: 'sqlite3',
      connection: {
        database: 'retro-data',
        user: '',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
    } */
  }