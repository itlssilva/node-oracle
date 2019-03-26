'use strict';

const express = require('express');
const app = express();
const router = express.Router();

const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

oracledb.getConnection(
    {
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
    },
    function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        connection.execute(
            "SELECT * FROM ACCESSCONTROL.USUARIO USUA WHERE USUA.USUA_ID = 657", function (err, result) {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                //console.log(result.metaData); // [ { name: ‘SYSDATE’ } ]
                console.log(result.rows); // [ [ 2017-12-08T19:03:45.000Z ] ]
                doRelease(connection);
            });
    }); function doRelease(connection) {
        connection.close(
            function (err) {
                if (err) {
                    console.error(err.message);
                }
            });
    }

// oracledb.getConnection(
//     {
//     user : dbConfig.user,    
//     password : dbConfig.password,
//     connectString : dbConfig.connectString
//     },
    
//     function(err, connection){
//     if (err) {    
//     console.error(err.message);
//     return;    
//     }
    
//     console.log('Connection was successful!');

//     connection.close(
    
//     function(err) {   
//     if (err) {    
//     console.error(err.message);
//     return;    
//     }    
//     });
//  });


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Oracle API",
        version: "0.0.1"
    });
});
app.use('/', route);

module.exports = app;
