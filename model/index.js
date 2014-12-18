/**
 * Created by HenryCui on 14-12-16.
 */
var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.db_connect,function(err){
   if(err){
       console.error('Can not connect to %s:',config.db_connect,err);
       process.exit(1);
   }
});

require('./content');
require('./temp');

exports.Content = mongoose.model('content');
exports.Temp = mongoose.model('temp');