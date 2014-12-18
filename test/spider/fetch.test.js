/**
 * Created by hengliang.cui on 2014/12/18.
 */
var should = require('should');
var fetch = require('../../spider/fetch');
describe('spider fetch',function(){
    describe('get method',function(){
        it('It should get ok.',function(){

            fetch.get(function(data){
                console.log(data);
                data.should.be.ok;
                done();
            });
        });
    });
});