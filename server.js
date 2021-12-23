const express = require('express');
require("dotenv").config({ path: "./config.env" });

const app = express()

const mongoose = require('mongoose');
const db = require('./utility/db');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const subscriberRoutes = require('./routes/subscribers');
app.use('/subscribers', subscriberRoutes);



// for database connection and to check port connection
db.then(() => {
    app.listen(process.env.port, "0.0.0.0", () => {
        console.log("connected to the port");
    });
}).catch((err) => {
    console.log(err);
});