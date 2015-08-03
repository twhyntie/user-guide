'use strict';

exports = module.exports = function(app) {

  // Front end.
  app.get('/', require('./views/index').init);
  app.get('/about/', require('./views/about/index').init);

}
