/**
 * Created by hengliang.cui on 2014/12/18.
 */
var request = require('request');
var config = require('../config');
var async = require('async');
var helper = require('../helper/reqhelper');
var cheerio = require('cheerio');
var contentProxy = require('../proxy/content');
var headers = helper.makeReqHeader();

exports.get=function(callback){
    var site = config.sites[0];
    async.waterfall([
        function(cb){
        fetchList(site.list_url,function(err,data){
            if(err) throw  err;
            cb(null,data);
        });
    },
    function(data,cb){
        var count=0;
        if((!data)||data.length==0){
            cb(null,{result:false,count:0});
            return;
        }
        async.forEach(data,function(item,callback){
            fetchDetail(site.detail_url,item,function(err,content){
                contentProxy.newAndSave(site.site_name,site.site_url,site.detail_url+'&articleid='+item,'', item, content.content, content.title, content.date,
                    function(error,result){
                        if(error) {
                            callback(error);
                            return;
                        }
                    });
            })
        },function(err,result){
            if(err) {
                cb(err);
                return;
            }
            cb(null,{result:true,count:data.length});
        })

    }],function(err,result){
        callback(err,result);
    });
};
/**
 * Help Methods
 */
function fetchList(url,callback){
    request({
        url:url,
        headers:headers
    },function(err,response,body){
        if(err){
            callback(err);
            return;
        }
        var $ = cheerio.load(body);
        var array = [];
        $('.list-count').each(function(i,e){
            array.push($(e).text());
        });
        contentProxy.getExistsIds(array,function(err,data){
            var filter = fiterArray(array,data);
            callback(null,filter);
        });

    });
}

function fetchDetail(url,data,callback){
    var detailUrl = url+'&articleid='+data;
    request({
        encoding: null,
        url:detailUrl,
        headers:headers
    },function(err,response,body){
        var charset="EUC-KR";
        if(err){
            callback(err);
            return;
        }
        var bodydata = require('iconv-lite').decode(body, charset).toString();
        var $ = cheerio.load(bodydata);
        var content = {
            title:$('.tit-box span').text(),
            content:$('#tbody').text(),
            date:$('.date').text()
        }
        callback(null,content);
    })
}

function fiterArray(array,existsData){
    var filter = [];
    var count = 0;
    for(var i=0;i<array.length;i++){
        count=0;
        for(var j=0;j<existsData.length;j++){
            if(existsData[j].content_id==array[i]){
                break;
            }
            count++;
        }
        if(count==existsData.length)
        {
            filter.push(array[i]);
        }
    }
    return filter;
}
