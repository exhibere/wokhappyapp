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
      
     list(req, res) {
    	  return Happiness
    	    .all()
    	    .then(happiness => res.status(200).send(happiness))
    	    .catch(error => res.status(400).send(error));
    	},
    retrieveForUser(req, res) {
      	   return Happiness
      	    .sum('happy',{
      	    	where: {userId: req.params.userId}
      	 })
      	    .then(happySum =>  Happiness
      	      	    .count({
      	      	    	where: {userId: req.params.userId}
      	      	 })
      	      	    .then(happyCount => res.status(200).send({happinessIndex : Math.round(happySum*100/happyCount)} ))
      	      	    .catch(error => res.status(400).send(error)))
      	    .catch(error => res.status(400).send(error));
      	},
      	 retrieveForAll(req, res) {
       	   return Happiness
       	    .sum('happy')
       	    .then(happySum =>  Happiness
       	      	    .count()
       	      	    .then(happyCount => res.status(200).send({happinessIndex : Math.round(happySum*100/happyCount)} ))
       	      	    .catch(error => res.status(400).send(error)))
       	    .catch(error => res.status(400).send(error));
       	},
  };
