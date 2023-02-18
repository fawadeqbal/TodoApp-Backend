import express from 'express';

import cors from 'cors';

import Connection from "./database/db.js";
import Router from './routes/routes.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
Connection();
app.use('/', Router);

const PORT=8000;

app.listen(PORT);