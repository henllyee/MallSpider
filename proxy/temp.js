/**
 * Created by hengliang.cui on 2014/12/17.
 */
var Temp = require('../model').Temp;
var asnyc = require('async');

exports.save = function(tempType,tempContent,site,callback){
    //判断是否存在
    asnyc.waterfall([
        function(cb){
            findByTempType(tempType,site,function(err,data){
                if(err) throw  err;
                cb(null,data);
            });
        },
        function(data,cb){
            if(data){
                updateAndSave(tempContent,data,function(){
                    cb(null,true);
                });
            }
            else{
                newAndSave(tempType,tempContent,site,function(err,da){
                    if(err) throw err;
                    cb(null,true);
                });
            }
        }],
        function(err,result){
            callback(err,result);
    });
};

exports.findByType = findByTempType;
/**
 * Help Methods
 * */
function findByTempType(tempType,site,callback){
    Temp.findOne({temp_type:tempType,temp_source_site:site.site_name},function(err,data){
        if(err){
            callback(err);
            return;
        }
        callback(null,data);
    });
}

function newAndSave(tempType,tempContent,site,callback){
    var temp = new Temp();
    temp.temp_type=tempType;
    temp.temp_content = tempContent;
    temp.temp_source_site = site.site_name;
    temp.temp_source_site_url = site.site_url;
    temp.save(callback);
}

function updateAndSave(tempContent,doc,callback){
    doc.temp_content = tempContent;
    doc.save();
    callback();
}

