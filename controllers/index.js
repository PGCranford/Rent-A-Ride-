const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const rentalRoutes = require('./rental-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/rental', rentalRoutes);

module.exports = router;
