'use strict'

var express = require('express');

// Controllers


var router = express.Router();

// MiddleWare

var multipart = require('connect-multiparty');
var multipartMiddleWare = multipart({uploadDir: './uploads'});

// Routes


module.exports = router;