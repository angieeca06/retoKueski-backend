const express = require('express');

const router = express.Router();
const Goal = require('../models/goals');

router.get('/', (req,res)=>{
  Goal.find()
  .then()
  .then(goal => res.json(goal));
});

router.post('/',(req,res)=>{
  const newGoal = new Goal({
    title:req.body.title,
    motive:req.body.motive,
    date:req.body.date,
    id:req.body._id
  });

  newGoal.save()
  .then(()=>Goal.find())
  .then(goals => res.json(goals));
});

router.get('/:id',(req,res)=>{
  Goal.findById(req.params.id)
  .then(goal=>res.json(goal))
  .catch(error=>res.status(500).json({error}));
});

//delete

router.delete('/:id', (req,res)=>{
  Goal.findById(req.params.id)
  .then()
  .then(goal => goal.remove())
  .then(()=>Goal.find())

  .then(goals => res.json(goals))
  .catch(error=> res.status(500).json({error}))

});
//edit

router.put('/:id',(req,res, next)=>{
  Goal.findByIdAndUpdate({_id:req.params.id},req.body)
  .then(()=>{
    Goal.findOne({_id:req.params.id}).then((goal)=>{
      res.send(goal);
    });
  })
  .catch(next);
});

module.exports = router;
