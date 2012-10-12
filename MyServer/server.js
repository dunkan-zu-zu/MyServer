/**
 * Created with JetBrains WebStorm.
 * User: Technodrive
 * Date: 09.10.12
 * Time: 12:45
 * To change this template use File | Settings | File Templates.
 */
var http=require("http");
var url=require("url");

function startServer(route,Return){
    function onRequest(request,response) {
        var pathname=url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");


        route(Return,response,pathname);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
};

exports.startServer=startServer;




