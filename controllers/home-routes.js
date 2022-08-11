const { Renter, Vehicle } = require('../models');
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});

//route to login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/rental');
        return;
    }
    res.render('login');
});

//route to rental page
router.get('/rental', (req, res) => {
    Vehicle.findAll({
        attributes: [
            'id',
            'vehicleName',
            'vehicleMake',
            'vehicleModel',
            'vehicleYear',
            'renter_id',
        ],
    }).then(dbVehicleData => {
        console.log(dbVehicleData);
        const vehicles = dbVehicleData.map(car => car.get({ plain: true }));
        res.render('rental', { vehicles });
    });
});

module.exports = router;
