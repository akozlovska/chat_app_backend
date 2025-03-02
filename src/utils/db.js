'use strict';

const { Sequelize } = require('sequelize');

require('dotenv').config();

const client = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
});

module.exports = { client };
