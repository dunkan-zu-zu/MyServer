/**
 * Created with JetBrains WebStorm.
 * User: Technodrive
 * Date: 10.10.12
 * Time: 10:17
 * To change this template use File | Settings | File Templates.
 */
   var fs = require("fs");
var sys = require("sys");
var querystring = require("querystring");

function start(response){
     response.writeHead(200,{"Content-Type": "text/html"});
    response.write("<html><body><H1>Start</H1><br><a href ='/page1'>page1</a><br><a href ='/page2'>page2</a><img src='/favicon.ico'></body></html>"
    ) ;
} ;
function page1(response){
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write("<html><body><H1>Page1</H1><br><a href ='/'>start</a><br><a href ='/page2'>page2</a></body></html>"
    ) ;
} ;
function favicon(response){
    file1=fs.readFileSync(__dirname +"/favicon.PNG","utf8")

            response.write(file1);

          }



function page2(response){
    file=fs.readFileSync(__dirname +"/1.html",'utf8')


            response.writeHead(200,{"Content-Type":"text/html"});
            response.write(file);
            console.log(file) ;

}

exports.favicon=favicon;
exports.start=start;
exports.page1=page1;
exports.page2=page2;
