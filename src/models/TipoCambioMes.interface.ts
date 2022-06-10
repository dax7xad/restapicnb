export interface TipoCambioMes {
    "soap:Envelope": SoapEnvelope;
}

export interface SoapEnvelope {
    $: SoapEnvelopeClass;
    "soap:Body": SoapBody[];
}

export interface SoapEnvelopeClass {
    "xmlns:soap": string;
    "xmlns:xsi": string;
    "xmlns:xsd": string;
}

export interface SoapBody {
    RecuperaTC_MesResponse: RecuperaTCMesResponseElement[];
}

export interface RecuperaTCMesResponseElement {
    $: RecuperaTCMesResponse;
    RecuperaTC_MesResult: RecuperaTCMesResult[];
}

export interface RecuperaTCMesResponse {
    xmlns: string;
}

export interface RecuperaTCMesResult {
    Detalle_TC: DetalleTC[];
}

export interface DetalleTC {
    $: RecuperaTCMesResponse;
    Tc: Tc[];
}

export interface Tc {
    Fecha: Date[];
    Valor: string[];
    Ano: string[];
    Mes: string[];
    Dia: string[];
}