/**
 * Created by HenryCui on 14-12-15.
 */
module.exports={
   sites: [
    {
        site_name:'naver cafe oksteel require',
        site_url:'http://cafe.naver.com/oksteel.cafe',
        list_url:'http://cafe.naver.com/ArticleList.nhn?search.clubid=16997305&search.menuid=31&search.boardtype=L',
        detail_url:'http://cafe.naver.com/ArticleRead.nhn?clubid=16997305'
    }],
    db_connect:'mongodb://127.0.0.1/mall',
    interval_time:1000*10,
    login:{
        login_url:'https://nid.naver.com/nidlogin.login',
        user_name:'',
        user_password:''
    }
};
