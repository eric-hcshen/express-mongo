"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./routes/crmRoutes");
const mongoose = require("mongoose");
class App {
    //'mongodb+srv://mflixAppUser:mflixAppPwd@mflix-xfvfp.mongodb.net/mflix';
    //'mongodb+srv://m220student:m220password@mflix-xfvfp.mongodb.net/admin'
    //'mongodb://localhost/CRMdb';
    constructor() {
        this.routePrv = new crmRoutes_1.Routes();
        this.mongoUrl = 'mongodb+srv://m220student:m220password@mflix-xfvfp.mongodb.net/test';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
        console.log(this.mongoUrl);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map