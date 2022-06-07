export interface TipoCambioDia {
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
    RecuperaTC_DiaResponse: RecuperaTCDiaResponseElement[];
}

export interface RecuperaTCDiaResponseElement {
    $: RecuperaTCDiaResponse;
    RecuperaTC_DiaResult: string[];
}

export interface RecuperaTCDiaResponse {
    xmlns: string;
}
