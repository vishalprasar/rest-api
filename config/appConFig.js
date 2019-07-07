let appConFig = {};
appConFig.port = 3000;
appConFig.allowedCorsOrigin = "*";
appConFig.env = "dev";
appConFig.db = {
    uri : 'mongodb://127.0.0.1:27017/blogAppDB',
}
appConFig.apiVersion = "./api/v1";
module.exports={
    port:appConFig.port,
    allowedCorsOrigin: appConFig.allowedCorsOrigin ,
    env:appConFig.env ,
    db:appConFig.db,
    apiVersion:appConFig.apiVersion

}