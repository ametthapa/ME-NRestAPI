const mongoose = require("mongoose");
const db = process.env.db;

module.exports = mongoose
    .connect(db)
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });