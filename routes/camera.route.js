const express = require('express');
const app = express.Router();
const cameraController = require('../controllers/camera.controller');

app.post('/', cameraController.createcamera);
app.get('/', cameraController.getcamera);
app.get('/:id',cameraController.getcameraById);
app.get('/ip/:ip',cameraController.getcameraIp);
app.put('/:id', cameraController.updatecamera);


module.exports = app;
