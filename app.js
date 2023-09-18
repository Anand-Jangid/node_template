require('dotenv').config();
require('express-async-errors');
//express
const express = require("express");
const app = express();

//rest of the packages
const logger = require('morgan');

app.use(logger('tiny'));
app.use(express.json()); // Parse JSON request bodies

//routers
//TODO: place your routers here

//middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.get('/', (req, res) => {
    res.send("Hello World");
})

const port = process.env.PORT || 8080;

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})