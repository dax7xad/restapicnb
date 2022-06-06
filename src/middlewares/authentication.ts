import msg from '../routes/message';
import { Response } from "express";
import jwt from 'jsonwebtoken';
const SEED: string = process.env.SEED || '';

export default class Auth {

    // ================================================================================
    // Titulo: Verifica Token (MiddleWare)
    // ================================================================================

    static verificaToken(req: any, res: Response, next: Function) {
        const token = req.get('Authorization');

        req.body.usuario = '';

        jwt.verify(token, SEED, (err: any, decoded: any) => {

            if (err) return msg.error(res, 405, 'Token incorrecto', err);

            req.usuario = decoded.usuario;
            next();
            return;
        });
    }



 }
