const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model { }


Vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        vehicleName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicleMake: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicleModel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicleYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        renter_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Renter',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Vehicle'
    }
);

module.exports = Vehicle;