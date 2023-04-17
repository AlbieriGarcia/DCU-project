const Sequelize = require("sequelize");

const sequelize = require("../context/database");

const Herramientas = sequelize.define("herramienta", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false,
    },     
});

module.exports = Herramientas;