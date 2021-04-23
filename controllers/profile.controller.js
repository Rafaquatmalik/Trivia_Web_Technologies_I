const mongoose = require('mongoose');
const Profile = require('../models/profile.model');
const User = require('../models/user.model');
var user_controller = require('../controllers/user.controller');

exports.profile_list = (req, res) => {
	Profile.find((err, profiles) => {
		User.find((err, users) => {
			console.log(users);
			res.render('list', {
				page: 'Show All Profiles',
				menuId: 'list',
				profile: profiles,
				users: users,
			});
		});
	});
};

exports.profile_updateform = (req, res) => {
	Profile.findById(req.params.id, (err, profile) => {
		if (err) return next(err);
		res.render('profile_updateform', {
			page: 'Update Profile',
			menuId: 'updateform',
			profile: profile,
		});
	});
};

exports.profile_update = (req, res) => {
	Profile.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, profile) => {
		if (err) return next(err);
		res.redirect('/profiles/list');
	});
};

exports.user_updateform = (req, res, next) => {
	console.log(user_controller.activeUser());
	if (user_controller.activeUser() === req.params.username) {
		User.findOne({ username: req.params.username }, (err, user) => {
			if (err) return next(err);
			res.render('user_updateform', {
				page: 'Change Password',
				menuId: 'password',
				user: user,
			});
		});
	} else {
		res.redirect('/profiles/list');
	}
};

exports.user_update = (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
		if (err) return next(err);
		res.redirect('/profiles/list');
	});
};
