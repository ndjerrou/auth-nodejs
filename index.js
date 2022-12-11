// create an express app with one endpoint GET /
const express = require('express');
require('dotenv').config();

const connectDB = require('./db/connexion');

const usersRouter = require('./users.js/users.router');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/users', usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listenning on port ${port}`));
