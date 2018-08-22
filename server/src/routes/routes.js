const express = require('express');
const router = express.Router();

const Park = require('../models/park');
const Ground = require('../models/ground');
const Admin = require('../models/admin');

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

router.use('/add_ground',function(req, res){
	console.log('-----------addding ground-------')
	Ground.findOne({name: req.body.name},function(err, ground){
		if(!err && ground == null){
			new Ground({
				name : req.body.name,
				park_id : req.body.park_id,
				sports : req.body.sports,

			}).save(function(err1, ground1){
               res.json({
               	status:'success',
               	message : 'Ground added successfully',
               	data : ground1
               })
			})
		} else {
			res.json({
				status:'fail',
				message : 'Ground already exists',	
				data : ground
			})
		}
	})
});

router.use('/get_grounds',function(req, res){
	console.log('--------getting grounds-----------')

	getGrounds(function(callback){
	 	res.json(callback)
	});
});

router.use('/update_ground',function(req, res){
	console.log('--------updating grounds-----------')
	Ground.findByIdAndUpdate(req.body._id,{$set:req.body}, function(err, result){
        if(!err) {
            getGrounds(function(callback){
			 	res.json(callback)
			});
        } else {
        	res.send('error');
        }
    });
});

router.use('/delete_ground',function(req, res){
	Ground.remove({ _id: req.body.id }, function(err) {
	    if (!err) {
	        getGrounds(function(callback){
			 	res.json(callback)
			});
	    }
	    else {
	        res.send('error')
	    }
	});
});

router.use('/get_admins',function(req, res){
	console.log('--------getting admins-----------')

	getAdmins(function(callback){
	 	res.json(callback)
	});
});

router.use('/add_admin',function(req, res){
	console.log('-----------addding admin-------', req.body)
	Admin.findOne({email: req.body.email},function(err, admin){
		if(!err && admin == null){
			new Admin({
				fname : req.body.fname,
				lname : req.body.lname,
				uname : req.body.uname,
				email : req.body.email,
				phone : req.body.phone,
				type : req.body.type,
			}).save(function(err1, admin1){
               res.json({
               	status:'success',
               	message : 'Admin added successfully',
               	data : admin1
               })
			})
		} else {
			res.json({
				status:'fail',
				message : 'Admin with this email already exists',	
				data : admin
			})
		}
	})
});

router.use('/update_admin',function(req, res){
	console.log('--------updating admin-----------')
	Admin.findByIdAndUpdate(req.body._id,{$set:req.body}, function(err, result){
        if(!err) {
            getAdmins(function(callback){
			 	res.json(callback)
			});
        } else {
        	res.send('error');
        }
    });
});

router.use('/delete_admin',function(req, res){
	Admin.remove({ _id: req.body.id }, function(err) {
	    if (!err) {
	        getAdmins(function(callback){
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

function getGrounds(callback) {
	Ground.find({},function(err, ground){
		obj = {
			status:'success',
			message : 'Grounds fetched',	
			data : ground
		};
		callback(obj);
	})
}

function getAdmins(callback) {
	Admin.find({},function(err, admin){
		obj = {
			status:'success',
			message : 'Admins fetched',	
			data : admin
		};
		callback(obj);
	})
}

module.exports = router;