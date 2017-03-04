
const connection=require('./../db');
const objectTypes=require('object-types')
const customer={

    getAllCustomer:function(callback)
    {
        return connection.query("select * from CSCustomer",callback);
    },
    addCustomer:function(Customers,callback){
      //console.log(Customers.address.street);
        return connection.query('insert into CSCustomer values(?,?,?,?,?,?,?,?,?)',[Customers.code,Customers.firstname,Customers.lastname,Customers.address,Customers.city,Customers.province,Customers.postcode,Customers.telephone,Customers.taxid],callback);
    },
    getCustomerByCode:function(code,callback)
    {
        return connection.query("select * from CSCustomer where code=?",[code],callback);
    },
    updateCustomerByCode:function(Customers,callback)
    {
        
        //return connection.query("update CSCUSTOMER set firstname=?,lastname=?,address=?,city=?,province=?,postcode=?,telephone=?,taxid=?where code=?",[Customers.firstname,Customers.lastname,Customers.address,Customers.city,Customers.province,Customers.postcode,Customers.telephone,Customers.taxid,Customers.code],callback);
         return connection.query("update CSCustomer set ? where ? ",[{
             firstname:Customers.firstname,
             lastname:Customers.lastname,
             address:Customers.address,
             city:Customers.city,
             province:Customers.province,
             postcode:Customers.postcode,
             telephone:Customers.telephone,
             taxid:Customers.taxid},{code:Customers.code}],callback);
    },
     delCustomerByCode:function(Customers,callback)
    {
        
        return connection.query("delete from CSCustomer where code=?",[Customers.code],callback);
    },
    genCode:function(callback)
    {
        return connection.query("select code from CSCustomer ORDER BY code DESC LIMIT 1".callback);
    }

   
}
module.exports=customer;