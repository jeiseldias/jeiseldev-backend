require('dotenv').config();
const moment = require('moment');

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.DATA_HOST,
            port: process.env.DATA_PORT,
            user: 'backjeisel',
            password: process.env.DATA_PASSWORD,
            database: process.env.DATA_BASE,
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
            host: process.env.TEST_HOST,
            port: process.env.TEST_PORT,
            user: process.env.TEST_USER,
            password: process.env.TEST_PASSWORD,
            database: process.env.TEST_BASE,
        },
        migrations: {
            directory: './src/database/migrations'
        }
      },
};
