const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const RecipeModel = sequelize.define('RecipeModel', {
  campo1: { type: DataTypes.STRING, allowNull: false },
  campo2: { type: DataTypes.INTEGER, allowNull: true },
}, {
  timestamps: false,
});
 
module.exports = RecipeModel;