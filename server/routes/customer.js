const express = require('express');
const router = express.Router();
const customer=require('./../models/customer');
const stringify = require('json-stringify-safe');

router.get('/',function(req,res)
{
     customer.getAllCustomer(function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
});

router.get('/:code',function(req,res){
    
if(req.params.code){
    customer.getCustomerByCode(req.params.code,function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
}});
router.post('/customers',function(req,res){

 
   customer.addCustomer(req.body,function(err,count){
        if(!err)
        res.json(count);
        else
       res.json(err);
        
    });
});

router.get('/last',function(req,res){
    customer.genCode(function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
});
router.delete('/customers',function(req,res){
    
    customer.delCustomerByCode(req.body,function(err,count)
    {
        if(!err)
        res.json(count);
        else
        res.json(err);
    })
});
router.put('/customers',function(req,res){
    customer.updateCustomerByCode(req.body,function(err,count)
    {
       
        if(!err)
        res.json(count);
        else
        res.json(err);
    })

})

module.exports=router;