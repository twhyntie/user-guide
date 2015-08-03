'use strict';

// For retrieving (local) environment variables.
var env = require('node-env-file');
//
if (!process.env.MONGOLAB_URI) {
  console.log('process.env.MONGOLAB_URI is undefined - dev mode?');
  // If we're in development, get the environment variables.
  env(__dirname + '/.env');
}

exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/drywall'
};

exports.companyName = 'T. Whyntie';
exports.projectName = 'UserGuide';
