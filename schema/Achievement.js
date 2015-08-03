'use strict';

exports = module.exports = function(app, mongoose) {

  var achievementSchema = new mongoose.Schema(
    {
      _id: { type: String },
      name: { type: String, default: '' },
      longname: { type: String, default: '' },
      description: { type: String, default: '' },
      category: { type: String, default: '' },
      icon: { type: String, default: 'fa-times' }
    },
    { collection : 'achievementscollection' }
  );
  
  app.db.model('Achievement', achievementSchema);
};
