const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const exerciseRoutes = require('/exercise-routes.js');
const cardioRoutes = require('./cardio-routes.js');
const strengthRoutes = require('./strength-routes.js');


router.use('/User', userRoutes);
router.use('/Exercises', exerciseRoutes);
router.use('/Cardio', cardioRoutes);
router.use('/Strength', strengthRoutes);


module.exports = router;