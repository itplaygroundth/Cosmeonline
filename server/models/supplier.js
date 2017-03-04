
const connection=require('./../db');
const objectTypes=require('object-types')
const supplier={

    getAllSupplier:function(callback)
    {
        return connection.query("select * from CSSupplier",callback);
    },
    addSupplier:function(Suppliers,callback){
      //console.log(Suppliers.address.street);
        return connection.query('insert into CSSupplier values(?,?,?,?,?,?,?,?,?)',[Suppliers.code,Suppliers.firstname,Suppliers.lastname,Suppliers.address,Suppliers.city,Suppliers.province,Suppliers.postcode,Suppliers.telephone,Suppliers.taxid],callback);
    },
    getSupplierByCode:function(code,callback)
    {
        return connection.query("select * from CSSupplier where code=?",[code],callback);
    },
    updateSupplierByCode:function(Suppliers,callback)
    {
        
        //return connection.query("update CSSupplier set firstname=?,lastname=?,address=?,city=?,province=?,postcode=?,telephone=?,taxid=?where code=?",[Suppliers.firstname,Suppliers.lastname,Suppliers.address,Suppliers.city,Suppliers.province,Suppliers.postcode,Suppliers.telephone,Suppliers.taxid,Suppliers.code],callback);
         return connection.query("update CSSupplier set ? where ? ",[{
             firstname:Suppliers.firstname,
             lastname:Suppliers.lastname,
             address:Suppliers.address,
             city:Suppliers.city,
             province:Suppliers.province,
             postcode:Suppliers.postcode,
             telephone:Suppliers.telephone,
             taxid:Suppliers.taxid},{code:Suppliers.code}],callback);
    },
    delSupplierByCode:function(Suppliers,callback)
    {
        return connection.query("delete from CSSupplier where code=?",[Suppliers.code],callback);
    }
    ,
    genCode:function(callback)
    {
        return connection.query("select code from CSSupplier ORDER BY code DESC LIMIT 1".callback);
    }

   
}
module.exports=supplier;