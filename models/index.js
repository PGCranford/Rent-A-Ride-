const Vehicle = require('./Vehicle');
const Renter = require('./Renter');

//Renter belongs to Vehicle
Renter.hasMany(Vehicle, {
    foreignKey: 'renter_id',
    onDelete: 'SET NULL'
});

//Vehicle belongs to Renter
Vehicle.belongsTo(Renter, {
    foreignKey: 'renter_id',
    onDelete: 'SET NULL'
});

module.exports = { Vehicle, Renter };
