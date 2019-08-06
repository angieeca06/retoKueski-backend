const router = require('express').Router();
const verify = require('../verifyToken');

router.get('/', verify,  (req,res) =>{
	console.log(req);
	res.json({ posts: {title: 'my first post', description: 'random data'} })
})


module.exports = router;
