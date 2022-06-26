
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes')
const app = express();

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
