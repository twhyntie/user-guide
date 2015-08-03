'use strict';

exports = module.exports = function(app, mongoose) {
  require('./schema/Achievement')(app, mongoose);
};
