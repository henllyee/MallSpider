/**
 * Created by hengliang.cui on 2015/1/23.
 */

var fetch = require('./spider/fetch');
var config = require('./config');
var moment = require('moment');

setInterval(function(){
    fetch.get(function(err,result){

        if(err||(!result)){
            console.log('抓取失败！%s',moment(Date.now()).format('YYYY-MM-DD hh:ss:mm'));
        }

        if(result.result) {
            console.log('抓取成功!本次抓取：%s条.  %s',result.count,moment(Date.now()).format('YYYY-MM-DD hh:ss:mm'));
        }
        else{
            console.log('未抓取到数据！ %s',moment(Date.now()).format('YYYY-MM-DD hh:ss:mm'));
        }

    });
},config.interval_time);