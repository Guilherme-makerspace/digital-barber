const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/dbconfig');

class Profissional extends Model {}

Profissional.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty: {
      type: DataTypes.ENUM('Corte de cabelo', 'Barba', 'Sobrancelha', 'Outros'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Professional',
    tableName: 'professionals',
  }
);

module.exports = Profissional;
