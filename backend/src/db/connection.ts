// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../knexfile.js');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const database = require('knex')(config);

export default database;
