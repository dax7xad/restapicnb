import { Router, Request, Response } from 'express';
import { fnGetTCByDay } from '../utils/RecuperaTC_Dia';

const router = Router();

router.get('/' , async (req: Request, res:Response) =>{

    const result =  await fnGetTCByDay(2022,5,17);

    return res.status(200).json({
        ok: true,
        mensaje: result
    })
//    return msg.succes(res, 200, 'Todo salio bien');


});

router.get('/getTC', async (req: Request, res: Response) => {
    const year: number = Number( req.query.year) ||0;
    const month:number = Number(req.query.month)||0;
    const day: number = Number(req.query.day) ||0;
    const result = await fnGetTCByDay(year, month, day);

    return res.status(200).json({
        ok: true,
        mensaje: result
    })
    //    return msg.succes(res, 200, 'Todo salio bien');


});

export default router;