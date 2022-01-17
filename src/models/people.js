'use strict';

const sequelize = require("sequelize");

const peopleSchema = (sequelize, DataTypes) => sequelize.define('People', {
    name: {
        type: DataTypes.STRING,
        // allowNull: false,
    },

});

module.exports = peopleSchema;