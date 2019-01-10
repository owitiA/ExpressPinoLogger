'use strict '
// import {logOnRequest} from 'pino-wrapper';
// const app = require('express')();


// app.use(logOnRequest());

//import pino from 'pino';
import app from './src/app';
import expressPino from 'express-pino-logger'

app.use(expressPino)