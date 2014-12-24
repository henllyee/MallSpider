/**
 * Created by HenryCui on 14-12-16.
 */
var Content =require('../model').Content;

exports.newAndSave=function(sourceSite,sourceSiteUrl,sourceUrl,contentType,contentId,content,title,publishDate,callback){
    var object = new Content();
    object.source_site=sourceSite;
    object.source_site_url = sourceSiteUrl;
    object.source_url = sourceUrl;
    object.content_type = contentType;
    object.content_id = contentId;
    object.content = content;
    object.title =title;
    object.publish_date = new Date(publishDate);
    object.save(callback);
};

exports.getExistsIds=function(contentIds,callback){
    Content.find({content_id:{$in:contentIds}})
        .select('content_id')
        .exec(callback);
}