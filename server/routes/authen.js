const express = require('express');
const router = express.Router();

const stringify = require('json-stringify-safe');
router.post('/authenticate',function(req,res)
{
     customer.getAllCustomer(function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
    //res.json('authen MAN');
    //console.log('authen JA!');
});

module.exports=router;
