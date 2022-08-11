const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
// const rentalRoutes = require('./api/rental-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/rental', rentalRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
