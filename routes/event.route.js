const express = require('express');
const app = express.Router();
const eventController = require('../controllers/event.controller');

app.post('/', eventController.createevent);
app.get('/', eventController.getevent);
app.get('/:id',eventController.geteventById);
app.put('/:id', eventController.updateevent);

module.exports = app;
