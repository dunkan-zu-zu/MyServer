/**
 * Created with JetBrains WebStorm.
 * User: Technodrive
 * Date: 09.10.12
 * Time: 12:09
 * To change this template use File | Settings | File Templates.
 */
var server = require("./server");
var route = require("./router");
var ReturnContent=require("./Return");


var Return={};
Return["/"]=ReturnContent.start;
Return["/page1"]=ReturnContent.page1;
Return["/page2"]=ReturnContent.page2;
Return["/favicon.ico"]=ReturnContent.favicon;


server.startServer(route.route,Return);
