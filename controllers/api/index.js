const router = require('express').Router();

const vehicleRoutes = require('./vehicle-routes');
const renterRoutes = require('./renter-routes');
const rentalRoutes = require('./rental-routes');

router.use('/vehicle', vehicleRoutes);
router.use('/renter', renterRoutes);
router.use('/rental', rentalRoutes);

module.exports = router;
