/**
 * Created by HenryCui on 14-12-16.
 */
var contentProxy = require('../../proxy/content')
var should = require('should');
describe('content proxy',function() {
    describe('add', function () {
        it('should add ok.', function () {
            contentProxy.newAndSave('test', 'http://www.sina.com', 'http://henllyee.cnblogs.com','5021', 'fda',
                function (err, data) {
                    err.should.not.be.ok;
                    done();
                });
        })
    })
});