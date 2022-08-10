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
    res.render('rental');
});

module.exports = router;
