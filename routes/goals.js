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
    date:req.body.date
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

module.exports = router;
