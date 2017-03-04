var mysql=require('mysql');
 var connection=mysql.createConnection({
        host:'localhost',
        user :'cosmo_admin',
        password:'IBMP@w0rd1234',
        database:'cosmo2017'
    });
// connection.connect(function(err,res){
//     if(err)
//     console.log(err);
//});
module.exports=connection;