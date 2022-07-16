/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host : process.env.DATA_HOST,
            port: process.env.DATA_PORT,
            user : process.env.DATA_USER,
            password : process.env.DATA_PASSWORD,
            database : process.env.DATA_BASE,
            typeCast: function (field, next) {
                if (field.type == 'DATE') {
                    return moment(field.string()).format('DD/MM/YYYY');
                } else if(field.type == 'DATETIME') {
                    return moment(field.string()).format('DD/MM/YYYY HH:mm');
                }
                return next();
            }
        },
        migrations: {
            directory: './src/database/migrations'
        }
    },

    test: {
        client: 'mysql2',
        connection: {
            host : process.env.TEST_HOST,
            port: process.env.TEST_PORT,
            user : process.env.TEST_USER,
            password : process.env.TEST_PASSWORD,
            database : process.env.TEST_BASE,
        },
        migrations: {
            directory: './src/database/migrations'
        }
      },

  /*staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }*/

};
