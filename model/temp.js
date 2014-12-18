/**
 * Created by hengliang.cui on 2014/12/17.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var temp = new Schema({
    temp_source_site:{type:String},
    temp_source_site_url:{type:String},
    temp_type:{type:String},
    temp_content:{type:String},
    record_date:{type:Date}
});
mongoose.model('temp',temp);