
import { Router, Request, Response } from 'express';
import { fnGetTCByDay } from '../utils/RecuperaTC_Dia';

const router = Router();

router.get('/' , async (req: Request, res:Response) =>{

    // const result = await fnGetTCByDay();

    return res.status(200).json({
        ok: true,
        mensaje: 'ok Funciona'
    })
//    return msg.succes(res, 200, 'Todo salio bien');


});

export default router;