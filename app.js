const express = require('express');
const consign = require('consign');

const app = express();

consign()
    .include("config/db.js")
    .then("db.js")
    .then('middlewares/config.js')
    .then('routes')
    .then('bin/boot.js')
    //.then('bin/error.js')
    .into(app);