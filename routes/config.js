var express = require('express');
var bodyParser = require('body-parser');
var cities = require('../controllers/citiesController.js');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = {
    routesConfig: function () {
        app.use('/', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
            res.header("Content-Type", "application/json");
            next();
        });

        app.get('/api/cities/:name', cities.getCitiesByParam);
        app.get('/api/cities/weather/:cityId', cities.getCitiesWeatherByParams);

        return app;
    }
}