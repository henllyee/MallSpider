/**
 * Created by hengliang.cui on 2015/1/23.
 */

var fetch = require('./spider/fetch');
var config = require('./config');

setInterval(function(){
    fetch.get(function(err,result){
        if(err||(!result)){
            console.log('抓取失败！%s',Date.now());
        }

        if(result.result) {
            console.log('抓取成功!本次抓取：%s条.  %s',result.count,Date.now());
        }
        else{
            console.log('未抓取到数据！ %s',Date.now());
        }

    });
},config.interval_time);