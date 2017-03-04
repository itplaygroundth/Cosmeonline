


const express = require('express');
const router = express.Router();
const users=require('./../models/users');
const stringify = require('json-stringify-safe');
// declare axios for making http requests

// router.get('/',(req,res)=>{
//     var rows=user.getAllUsers();
   
//          res.json(stringify(rows));
//     });

router.get('/',function(req,res)
{
     users.getAllUsers(function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
});

    //users.getAllUsers()function(err,rows){
    //  .then(posts => {
    //   res.status(200).json(posts.data);
    // })
    // .catch(error => {
    //   res.status(500).send(error)
    // });
        // if(err)
        // res.json(err);
        // else
        // res.json(rows);
   // });

router.get('/:userid',function(req,res){
    
if(req.params.userid){
    users.getUsersById(req.params.userid,function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
}});

// router.get('/users',function(req,res)
// {
//      users.getAllUsers(function(err,rows){
//         if(err)
//         res.json(err);
//         else
//         res.json(rows);
//     })
// });

router.post('/adduser',function(req,res){
   // var data=res.send(req.body);
  
   users.addUsers(req.body,function(err,count){
        if(!err)
        res.json({'success':true});
        else
       res.json({'success':false});
        
    });
});

module.exports=router;