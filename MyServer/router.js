/**
 * Created with JetBrains WebStorm.
 * User: Technodrive
 * Date: 09.10.12
 * Time: 17:01
 * To change this template use File | Settings | File Templates.
 */
function route(Return,response,pathname){
    if (typeof Return[pathname]==='function'){
        Return[pathname](response);
    }  else{
        console.log("Err!!!");
        response.write("Err!!!");
        response.end();
    }

};
exports.route=route;
