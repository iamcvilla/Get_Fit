const router = require('express').Router();

const userRoutes = require('./user-routes.js');

// use for later for exercise_segment, cardio and strength
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);

// use for later for exercise_segment, cardio and strength
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;