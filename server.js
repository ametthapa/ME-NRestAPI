const express = require('express');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = express()

const mongoose = require('mongoose');
const db = require('./utility/db');



db.then(() => {
    app.listen(process.env.port, "0.0.0.0", () => {
        console.log("connected to the port");
    });
}).catch((err) => {
    console.log(err);
});