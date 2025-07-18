const { DataTypes } = require("sequelize")
const sequelize = require('../config/database')

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.STRING,
    status: {
        type: DataTypes.ENUM("TO_DO", "IN_PROGRESS", "DONE")
    }
})

module.exports = Task