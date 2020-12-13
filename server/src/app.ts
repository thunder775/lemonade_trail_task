const express = require('express');
const dotenv = require('dotenv');
import {NextFunction, Request, Response} from "express";

const compression = require('compression');

dotenv.config({
    path: '.env'
});

const app = express();
app.use(express.static(__dirname + '/build'));
app.use(compression());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(__dirname + '/build/index.html');
});
app.listen(process.env.APP_PORT, () => console.log(`Listening on port ${process.env.APP_PORT}`))
