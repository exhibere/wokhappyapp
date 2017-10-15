const Happiness = require('../models').Happiness;
const Users= require('../models').Users;



module.exports = {
  create(req, res) {
	
	var happyInst=null;
	if(!req.body.userId)
	{
	userInst = {email: 'now available'};
	 Users
      .create(userInst).then(function(userInst)
    		  {
    	  happyInst = {
    			  happy: req.body.happy,
    		        userId:userInst.id
    		    };
    	  return Happiness.create(happyInst)
     	 .then(happyInst => res.status(201).send(happyInst))
     	.catch(error => res.status(400).send(error));
    		  })
	}
	
	else
		{
	 happyInst = {
    			  happy:  req.body.happy,
    		        userId:req.body.userId
    		    };

    return Happiness.create(happyInst)
    	 .then(happyInst => res.status(201).send(happyInst))
      .catch(error => res.status(400).send(error))}},
  };
