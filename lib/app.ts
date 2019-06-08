import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb+srv://m220student:m220password@mflix-xfvfp.mongodb.net/test';
    //'mongodb+srv://mflixAppUser:mflixAppPwd@mflix-xfvfp.mongodb.net/mflix';
    //'mongodb+srv://m220student:m220password@mflix-xfvfp.mongodb.net/admin'
    //'mongodb://localhost/CRMdb';

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        this.mongoSetup();
        console.log(this.mongoUrl);
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;