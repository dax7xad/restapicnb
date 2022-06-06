//const colors = require('colors');
import colors from 'colors';
import Server from './server/server';
const soapRequest = require('easy-soap-request');
import {xmlRecuTCDia } from './utils/RecuperaTC_Dia';
const fs = require('fs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" //this is insecure 
// example data
const url = 'https://servicios.bcn.gob.ni/Tc_Servicio/ServicioTC.asmx?WSDL';
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'http://servicios.bcn.gob.ni/RecuperaTC_Dia',
};

// Import de las rutas
import routerApp from './routes/app';

const server = Server.init();
// usage of module
const fnTipoCambio = async () => {
  const xml = xmlRecuTCDia(2022,1,6);
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log(headers);
  console.log(body);
  console.log(statusCode);
};
// Rutas
server.app.use( '/', routerApp );


// Inicializando el servidor
server.start( async () => {

    console.log('Express Server state:'+ colors.green(' ====> OK') )
    console.log('Express Server port: '+ colors.green(` ====> OK ${server.port.toString()}`));
  await fnTipoCambio();
  });


