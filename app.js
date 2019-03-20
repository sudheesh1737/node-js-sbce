const express = require('express');
const hbs =require('express')
var app= express();
app.set('view engine','hbs');

app.get('/',(req,res)=>{
res.send('welcome to web')
});
app.get('/home',(req,res)=>{
    res.render('index.hbs')
});
app.get('/condact',(req,res)=>{
    res.send('<h1>welcome to condact<h1>')
});

app.listen(3000);