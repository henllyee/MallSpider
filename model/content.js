/**
 * Created by HenryCui on 14-12-16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var content = new Schema({
    source_site:{type:String},
    source_site_url:{type:String},
    source_url:{type:String},
    content_type:{type:String,default:'inquire'},
    content_id:{type:String},
    content:{type:String},
    publish_date:{type:Date},
    fetch_date:{type:Date,default:Date.now}
});
mongoose.model('content',content);