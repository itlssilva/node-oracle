'use strict';

const express = require('express');
const app = express();
const router = express.Router();

const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

oracledb.getConnection(
    {
    user : dbConfig.user,    
    password : dbConfig.password,
    connectString : dbConfig.connectString
    },
    
    function(err, connection){
    if (err) {    
    console.error(err.message);
    return;    
    }
    
    console.log('Connection was successful!');
    
    connection.close(
    
    function(err) {   
    if (err) {    
    console.error(err.message);
    return;    
    }    
    });
 });


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Oracle API",
        version: "0.0.1"
    });
});
app.use('/', route);

module.exports = app;
