// Requires

import express from "express";

require('../config/config');

export default class Server {
    public app: express.Application;
    constructor (public port : number) {
        this.app= express();
        this.enableCors();
        this.bodyParseConfig();
    }

    static init () {
        return new Server( Number(process.env.PORT));
    }

    private enableCors() {
        this.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
            next();
          });
    }

    private bodyParseConfig() {
// ================================================================================
// Body Parser (Configuracion)
// parse application/x-www-form-urlencoded
// ================================================================================
    this.app.use(express.json());
    this.app.use(express.urlencoded({
    extended: false
    }));
    }

    start( callback: Function ) {
        this.app.listen( this.port, callback() );
    }

}