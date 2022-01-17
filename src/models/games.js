'use strict';

const sequelize = require("sequelize");

const gameSchema = (sequelize, DataTypes) => sequelize.define('Game', {
    title: {
        type: DataTypes.STRING,
        // allowNull: false,
    },

    peopleId: {
        type: DataTypes.INTEGER,
        // allowNull: false,

    }
});

module.exports = gameSchema;