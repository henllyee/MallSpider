/**
 * Created by HenryCui on 14-12-16.
 */
var config = require('../config');
var http = require('http');
var request = require('request');
var RSAkey = require('../helper/RSAKey1');
var keyUrl = 'https://nid.naver.com/login/ext/keys.nhn';




exports.getKey = function(callback){
  request(keyUrl,function(err,res,body){
      if(err) {
          callback(err);
          return;
      }
      var obj = splite(body);
      var rsa = new RSAkey();
      rsa.setPublic(obj.evalue,obj.nvalue);
      var code =rsa.encrypt(
          getLenChar(obj.sessionkey) + obj.sessionkey +
          getLenChar('zhaogangwang') + 'zhaogangwang' +
          getLenChar('chukoubu') + 'chukoubu');
      callback(null,{
          encnm:obj.keyname,
          enctp:1,
          encpw:code,
          svctype:'',
          svc:'',
          viewtype:'',
          locale:'Hans_CN',
          postDataKey:'',
          smart_LEVEL:-1,
          logintp:'',
          url:'http://section.cafe.naver.com/',
          localechange:'',
          theme_mode:'',
          pre_id:'',
          resp:'',
          exp:'',
          ru:''
      });
      console.log(body);
      console.log(code);
  })
};

exports.getLogin=function(){
    exports.getKey(function(err,data){
        request.post('https://nid.naver.com/nidlogin.login',
            data,
            function(err1,res,body){
                console.log(body);
            });
    });
}


/**
 *Help Methods
 */
function buildFormData(callback){
    request(keyUrl,function(err,res,body) {
        if(err||res.statusCode!=200){
            callback(err);
            return;
        }

    });
}

function splite(a){
    var keys = a.split(",");
    if (!a || !keys[0] || !keys[1] || !keys[2] || !keys[3]) {
        return {};
    }
    return {
        sessionkey : keys[0],
        keyname : keys[1],
        evalue : keys[2],
        nvalue : keys[3]
    };

}


function getLenChar(a) {
    a = a + "";
    return String.fromCharCode(a.length)
}