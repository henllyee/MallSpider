/**
 * Created by hengliang.cui on 2014/12/17.
 */
var should = require('should');
var tempProxy = require('../../proxy/temp');
describe('temp proxy',function(){
    describe('save',function(){
        it('should save ok.',function(){
            tempProxy.save('cookie','jack&henry11',
                {
                    site_name:'cnblogs',
                    site_url:'http://www.cnblogs.com'
                },function(err,data){
                    //console.log(err);
                    //done();
                });
        });
    })
})