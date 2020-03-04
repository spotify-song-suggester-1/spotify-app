const knex = require('knex');

const config = require('../knexfile.js');

//use this anywhere in code to access db
const db = knex(config.development);

module.exports = db;