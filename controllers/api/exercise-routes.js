const router = require('express').Router();
const sequelize = require('../../config/connection');
const {User, Exercises, Cardio, Strength} = require('../../models');
// const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Exercises.findAll()
    .then(dbExerciseData => res.json(dbExerciseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Exercises.findOne({
    where: {
      id: req.params.id
    },
    // attributes: [
    //   'id',
    //   'segment_name',
    //   'user_id',
    //   // 'created_at',
    //   [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    // ],
    include: [
      {
        model: User,
        attributes: ['id', 'first_name', 'last_name', 'email']
      },
      {
        model: Cardio,
        attributes: ['id', 'cardio_name', 'duration', 'distance']
      },
      {
        model: Strength,
        attributes: ['id', 'strength_name', 'strength_weight', 'strength_sets', 'strength_reps']
      }
    ]
  })
    .then(dbExerciseData => {
      if (!dbExerciseData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbExerciseData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', /* withAuth, */ (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Exercises.create({
    segment_name: req.body.segment_name,
    user_id: req.session.user_id
  })
    .then(dbExerciseData => res.json(dbExerciseData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.put('/upvote', withAuth, (req, res) => {
//   // custom static method created in models/Exercises.js
//   Exercises.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
//     .then(updatedVoteData => res.json(updatedVoteData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.put('/:id', withAuth, (req, res) => {
//   Exercises.update(
//     {
//       segment_name: req.body.segment_name
//     },
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(dbExerciseData => {
//       if (!dbExerciseData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbExerciseData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//   console.log('id', req.params.id);
//   Exercises.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbExerciseData => {
//       if (!dbExerciseData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbExerciseData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
