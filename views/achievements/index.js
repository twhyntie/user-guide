'use strict';

exports.init = function(req, res){

  // Pretty basic for now - simply find the achievements listed
  // in the database.
  req.app.db.models.Achievement.find(function (err, achievements){
    res.render('achievements/index', {achievements: achievements});
  });

};
