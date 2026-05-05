const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/dbconfig');

class Atendimento extends Model {}

Atendimento.init(
{
    time:{
        type: DataTypes.TIME,
        allowNull: false
    },

    data:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {isDate: true}
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isEmail: true},
        foreginKey: true,
        references: {
            model: 'Users',
            key: 'email'
        }
    },

    service:{
        type: DataTypes.ENUM('Corte de Cabelo', 'Barba', 'Sobrancelha', 'Outros'),
        allowNull: false
    },

    professional:{
        type: DataTypes.STRING
    }
},
    
{
    sequelize,
    modelName: 'Booking',
    tableName: 'booking'
}

)

module.exports = Atendimento;