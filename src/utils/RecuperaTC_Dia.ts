const soapRequest = require('easy-soap-request');
import { parseString } from "xml2js";


const url = 'https://servicios.bcn.gob.ni/Tc_Servicio/ServicioTC.asmx?WSDL';
const TC_DiaHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://servicios.bcn.gob.ni/RecuperaTC_Dia',
};
const TC_MesHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://servicios.bcn.gob.ni/RecuperaTC_Mes',
};
const XML = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <RecuperaTC_Dia xmlns="http://servicios.bcn.gob.ni/">
            <Ano>_YEAR_PARAM</Ano>
            <Mes>_MONTH_PARAM</Mes>
            <Dia>_DAY_PARAM</Dia>
        </RecuperaTC_Dia>
    </soap:Body>
</soap:Envelope>`;

const xml2 =`<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <RecuperaTC_Mes xmlns="http://servicios.bcn.gob.ni/">
      <Ano>_YEAR_PARAM</Ano>
      <Mes>_MONTH_PARAM</Mes>
    </RecuperaTC_Mes>
  </soap:Body>
</soap:Envelope>`
const xmlRecuTCDia  = ( anio: Number, mes: Number, dia: Number ): string  => {
    let xml = XML.replace('_YEAR_PARAM', anio.toString())
    .replace('_MONTH_PARAM',mes.toString())
    .replace('_DAY_PARAM', dia.toString() );
    return xml;
};

const xmlRecuTCMes = (anio: Number, mes: Number): string => {
    let xml = xml2.replace('_YEAR_PARAM', anio.toString())
        .replace('_MONTH_PARAM', mes.toString())
    return xml;
};

const xmlFormater = (anio: Number, mes: Number, dia: Number) : string => {
    console.log('day =>', dia)
    return (dia == 0) ? xmlRecuTCMes(anio,mes): xmlRecuTCDia(anio,mes,dia); 
}

const fnGetTC = async<T>(year: number,month: number,day: number) : Promise<T|null> => {
    const xml = xmlFormater(year, month, day);
    let jsonResults = null;
    const headersSoap = (day == 0) ? TC_MesHeaders: TC_DiaHeaders
    try {

        console.log(xml);
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=')
        const { response } = await soapRequest({ url: url, headers: headersSoap, xml });
        const { headers, body, statusCode } = response;
        console.log(headers);
        console.log(body);

        // parsing xml data
        parseString(body, function (err: any, results: T) {
            // display the json data
            console.log(JSON.stringify(results));
            // resultXml= Number( results["soap:Envelope"]["soap:Body"][0].RecuperaTC_DiaResponse[0].RecuperaTC_DiaResult[0])
            jsonResults = results;
        });
        return (statusCode == 200) ? jsonResults : null;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export  {
    xmlRecuTCDia,
    fnGetTC
};


