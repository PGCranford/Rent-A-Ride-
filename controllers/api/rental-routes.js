const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Renter, Vehicle } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Vehicle.findAll()
        .then(dbVehicleData => res.json(dbVehicleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
