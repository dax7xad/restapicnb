
import { Router, Request, Response } from 'express';



const router = Router();

router.get('/' , (req: Request, res:Response) =>{

    return res.status(200).json({
        ok: true,
        mensaje: 'todo funciona ok'
    })
//    return msg.succes(res, 200, 'Todo salio bien');


});

export default router;