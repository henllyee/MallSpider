/**
 * Created by hengliang.cui on 2014/12/18.
 */
var request = require('request');
var config = require('../config');
var async = require('async');
var helper = require('../helper/reqhelper');
var cheerio = require('cheerio');
var headers = helper.makeReqHeader();

exports.get=function(callback){

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
        console($('.list-count').length);
    });
}