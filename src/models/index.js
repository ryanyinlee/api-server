"use strict";

require('dotenv').config();
// when did I use mongodb?
// const { Collection } = require('mongodb'); 
const Collection = require('./Collection.js');
const { Sequelize, DataTypes } = require("sequelize");
// const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
// const DATABASE_URL = process.env.DATABASE_URL;

const gameSchema = require("./games.js");
const peopleSchema = require("./people.js");

let db = new Sequelize(DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

const GameModel = gameSchema(db, DataTypes);
const PeopleModel = peopleSchema(db, DataTypes);

// create assoc between the above 2 tables
PeopleModel.hasMany(GameModel, { foreignKey: 'peopleId', sourcekey: 'id'}); 
GameModel.belongsTo(PeopleModel, { foreignKey: 'peopleId', targetkey: 'id'}); // sourcekey

module.exports = {
    db,
    GameCollection: new Collection(GameModel),
    PeopleCollection: new Collection(PeopleModel),
};
