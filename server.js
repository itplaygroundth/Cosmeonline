// var express=require('express');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var path=require('path');
// var logger = require('morgan');
// var cors=require('cors');


// var app=express();
// var http=require('http').Server(app)
// app.use(cors());
// app.use(logger('dev'));

// app.use(bodyParser.urlencoded({extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());


// app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'jade');
// app.use('/node_modules',express.static(__dirname+'/node_modules'));
// app.use(express.static(path.join(__dirname, 'client')));
// app.use('./style',express.static(__dirname+'/style'));

// var users = require('./routes/users');
// app.use('/users/:userid',users);
// app.use('/users',users);
// app.post('/adduser',users);

// app.get('/',function(req,res){
//     res.sendFile('index.html',{'root':__dirname+'/templates'});
// });
// app.listen(8083,function(){
//     console.log('Cosme Online Backend Running....');
// });

// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

const express=require('express');
const path=require('path');
const http=require('http');
const bodyParser=require('body-parser');
const customer=require('./server/routes/customer');
const supplier=require('./server/routes/supplier');
const users=require('./server/routes/users');
const authen=require('./server/routes/authen');


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname,'dist')));

app.use('/customers',customer);
app.post('/customers',customer);
app.get('/customers',customer);
app.put('/customers',customer);
app.delete('/customers',customer);

app.use('/supplier',supplier);
app.post('/supplier',supplier);
app.get('/supplier',supplier);
app.put('/supplier',supplier);
app.delete('/supplier',supplier);

app.use('/authenticate',authen);
app.post('/authen',authen);


app.use('/users',users);
app.get('/users',users);


// var users = require('./routes/users');
// app.use('/users/:userid',users);
// app.use('/users',users);
// app.post('/adduser',users);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8082');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port=process.env.port || '8082'
app.set('port',port);

const server=http.createServer(app);
server.listen(port,()=>console.log('API Running on localhost:${port}'));

module.exports = app;