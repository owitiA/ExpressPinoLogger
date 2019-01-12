'use strict '
// import {logOnRequest} from 'pino-wrapper';
// const app = require('express')();
// app.use(logOnRequest());
import pino from 'pino';
import app from './src/app';
import pinoWrapper from 'pinoWrapper'

app.use(pinoWrapper)

app.get('/', (req, res) => {
    req.log.error(Error('run this test'))
    res.send('hope it works right')
})

app.listen(3000)

