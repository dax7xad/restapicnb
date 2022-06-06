import { Response } from 'express';

export default class Message {

    // ================================================================================
    //  Funcion generica que controla el error
    // ================================================================================
    public static error(res: Response, number: number, mensaje: string, err: any): Response {
        return res.status(number).json({
            ok: false,
            mensaje: mensaje,
            errors: err
        })
    }

    // ================================================================================
    // Funcion generica en caso de exito
    // ================================================================================
    public static succes(res: Response, number: number, object: any): Response {

        let counter = 1;

        if (object instanceof Object) counter = Object.keys(object).length;

        return res.status(number).json({
            ok: true,
            data: object,
            records: counter
        })
    }
}