
var connection=require('./../db');
var users={
    getAllUsers:function(callback)
    {
        return connection.query("select * from users",callback);
    },
    addUsers:function(Users,callback){
       
        return connection.query('insert into users values(?,?,?)',[Users.userid,Users.username,Users.password],callback);
    },
    getUsersById:function(userid,callback)
    {
        return connection.query("select * from users where userid=?",[userid],callback);
    }
    
}
module.exports=users;