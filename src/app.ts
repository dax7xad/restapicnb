//const colors = require('colors');
import colors from 'colors';
import Server from './server/server';

import {fnGetTCByDay } from './utils/RecuperaTC_Dia';


// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" //this is insecure 
// example data


// Import de las rutas
import routerApp from './routes/app';

const server = Server.init();
// usage of module

// Rutas
server.app.use( '/', routerApp );

// Inicializando el servidor
server.start( async () => {

    console.log('Express Server state:'+ colors.green(' ====> OK') )
    console.log('Express Server port: '+ colors.green(` ====> OK ${server.port.toString()}`));

  });


