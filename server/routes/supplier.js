const express = require('express');
const router = express.Router();
const Supplier=require('./../models/supplier');
const stringify = require('json-stringify-safe');

router.get('/',function(req,res)
{
     Supplier.getAllSupplier(function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
});

router.get('/:code',function(req,res){
    
if(req.params.code){
    Supplier.getSupplierByCode(req.params.code,function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
}});


router.post('/supplier',function(req,res){

 
   Supplier.addSupplier(req.body,function(err,count){
        if(!err)
        res.json(count);
        else
       res.json(err);
        
    });
});

router.get('/last',function(req,res){
    Supplier.genCode(function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
});

router.put('/supplier',function(req,res){
    Supplier.updateSupplierByCode(req.body,function(err,count)
    {
       
        if(!err)
        res.json(count);
        else
        res.json(err);
    })

});

router.delete('/supplier',function(req,res){
    Supplier.delSupplierByCode(req.body,function(err,rows){
        if(err)
        res.json(err);
        else
        res.json(rows);
    })
});


module.exports=router;