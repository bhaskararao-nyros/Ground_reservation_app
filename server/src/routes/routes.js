const express = require('express');
const router = express.Router();

const Park = require('../models/park');

router.use('/add_park',function(req, res){
	console.log('--------adding park-----------')
	Park.findOne({name: req.body.park_name},function(err, park){
		if(!err && park == null){
			new Park({
				name : req.body.park_name,
				address : req.body.park_address,
				website : req.body.park_website,

			}).save(function(err1, park1){
               res.json({
               	status:'success',
               	message : 'Park added successfully',
               	data : park1
               })
			})
		} else {
			res.json({
				status:'fail',
				message : 'Park already exists',	
				data : park
			})
		}
	})
});

router.use('/get_parks',function(req, res){
	console.log('--------getting parks-----------')

	getParks(function(callback){
	 	res.json(callback)
	});
	
});

router.use('/update_park',function(req, res){
	console.log('--------updating park-----------', req.body)
	Park.findByIdAndUpdate(req.body._id,{$set:req.body}, function(err, result){
        if(!err) {
            getParks(function(callback){
			 	res.json(callback)
			});
        } else {
        	res.send('error');
        }
    });
});

router.use('/delete_park',function(req, res){
	Park.remove({ _id: req.body.id }, function(err) {
	    if (!err) {
	        getParks(function(callback){
			 	res.json(callback)
			});
	    }
	    else {
	        res.send('error')
	    }
	});
});


function getParks(callback) {
	Park.find({},function(err, park){
		obj = {
			status:'success',
			message : 'Parks fetched',	
			data : park
		};
		callback(obj);
	})
}

module.exports = router;