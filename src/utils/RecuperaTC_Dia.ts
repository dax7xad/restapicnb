
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
export  {
     xmlRecuTCDia,
};
