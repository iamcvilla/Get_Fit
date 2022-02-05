const router = require('express').Router();
const { Cardio } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Cardio.findAll()
    .then(dbCardioData
       => res.json(dbCardioData
      ))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', /* withAuth,*/ (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Cardio.create({
    cardio_name: req.body.cardio_name,
    duration: req.body.duration,
    distance: req.body.distance,
    user_id: req.session.user_id
  
  })
    .then(dbCardioData
       => res.json(dbCardioData
      ))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', /* withAuth,*/ (req, res) => {
  Cardio.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCardioData
       => {
      if (!dbCardioData
        ) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCardioData
        );
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
