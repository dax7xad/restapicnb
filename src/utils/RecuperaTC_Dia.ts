const soapRequest = require('easy-soap-request');
import { parseString } from "xml2js";
import { TipoCambioDia } from "../models/TipoCambioDia.interface";
const url = 'https://servicios.bcn.gob.ni/Tc_Servicio/ServicioTC.asmx?WSDL';
const sampleHeaders = {
    'user-agent': 'sampleTest',
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://servicios.bcn.gob.ni/RecuperaTC_Dia',
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
const xmlRecuTCDia  = ( anio: Number, mes: Number, dia: Number ): string  => {
    let xml = XML.replace('_YEAR_PARAM', anio.toString())
    .replace('_MONTH_PARAM',mes.toString())
    .replace('_DAY_PARAM', dia.toString() );
    return xml;
};

const fnGetTCByDay = async (year: number,month: number,day: number) : Promise<number> => {
    const xml = xmlRecuTCDia(year, month, day);
    let resultXml: number = 0;
    try {
        const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml });
        const { headers, body, statusCode } = response;
        console.log(headers);
        console.log(body);

        // parsing xml data
        parseString(body, function (err: any, results: TipoCambioDia) {
            // display the json data
            resultXml= Number( results["soap:Envelope"]["soap:Body"][0].RecuperaTC_DiaResponse[0].RecuperaTC_DiaResult[0])

        });

        console.log(statusCode);
        return (statusCode == 200) ? resultXml : 0;
    } catch (error) {
        console.error(error);
        return 0;
    }


};
export  {
     xmlRecuTCDia,
     fnGetTCByDay
};


