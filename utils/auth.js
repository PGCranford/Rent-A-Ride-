const withAuth = (req, res, next) => {
    if (!req.session.renter_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
