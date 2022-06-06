
import { Response } from "express";

export const validateEmpty = (req: any, res: Response, next: Function) => {

    if (typeof req !== 'object' && req !== null) {
        return res.status(500).send({
            error: "request is not a object"
        });
    }

    if (!req.hasOwnProperty('body')) {
        return res.status(500).send({
            error: "request with empty body"
        });
    }

    if (!Object.keys(req.body).length) {
        return res.status(500).send({
            error: "body is empty object"
        });
    };

    // if string value is longer than 0, continue with next function in route
    next();
}