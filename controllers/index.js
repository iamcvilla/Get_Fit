const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./user-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;