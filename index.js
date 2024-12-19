const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const main = require("./main.js");
app.use ("/", main);

async function start() {
    try {
        await mongoose.connect(
            "mongodb://mongoadmin:secret@localhost:27017"
        );


        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start();
