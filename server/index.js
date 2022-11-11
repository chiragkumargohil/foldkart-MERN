import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes);

const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

Connection(dbUser, dbPassword);

app.get('/', (req, res) => {
    res.send('< CMG />');
});

let PORT = 5000;
app.listen(PORT, () => console.log("Server is running successfully on PORT " + PORT));

DefaultData();