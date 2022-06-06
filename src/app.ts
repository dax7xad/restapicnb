//const colors = require('colors');
import colors from 'colors';
import Server from './server/server';
const soapRequest = require('easy-soap-request');
const fs = require('fs');

const xml = fs.readFileSync('zip-code-envelope.xml', 'utf-8');
// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};

// Import de las rutas
import routerApp from './routes/app';

const server = Server.init();

// Rutas
server.app.use( '/', routerApp );

// Inicializando el servidor
server.start( () => {
    console.log('Express Server state:'+ colors.green(' ====> OK') )
    console.log('Express Server port: '+ colors.green(` ====> OK ${server.port.toString()}`));
  (async () => {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
    const { headers, body, statusCode } = response;
    console.log(headers);
    console.log(body);
    console.log(statusCode);
  })();
  });

// usage of module



