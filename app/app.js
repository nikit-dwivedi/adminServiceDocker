//----------import dependencies-------------------------------
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const app = express();

//----------import files--------------------------------------
const { success, badRequest, unknownError } = require('./src/api/v1/helpers/response_helper')
const version1Index = require("./src/api/v1/index");


//----------use dependencies----------------------------------
//use morgan
app.use(morgan('dev'));
// use cors
app.use(cors());
//image path
app.use('/static', express.static('static'))
//body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//----------redirect routes-----------------------------------
app.use('/v1', version1Index);


//----------for invalid requests start -----------------------

app.use(function (err, req, res, next) {
    if (err instanceof multer.MulterError) {
        // A Multer error occurred during file upload
        badRequest(res, err.message);
    } else {
        unknownError(res, err.message);
    }
});

app.all('*', async (req, res) => {
    await badRequest(res, 'Invalid URL');
});
module.exports = app;
