import { Router, Request, Response } from 'express';
import { TipoCambioDia } from '../models/TipoCambioDia.interface';
import { fnGetTC } from '../utils/RecuperaTC_Dia';
import { TipoCambioMes, Tc } from '../models/TipoCambioMes.interface';

const router = Router();

router.get('/' , async (req: Request, res:Response) =>{

    const result = await fnGetTC(2022,5,17);

    return res.status(200).json({
        ok: true,
        mensaje: result
    })
//    return msg.succes(res, 200, 'Todo salio bien');


});

router.get('/getTCDia', async (req: Request, res: Response) => {
    const { year, month, day }: { year: number; month: number; day: number; } = getParams(req);
    const results = await fnGetTC<TipoCambioDia>(year, month, day);
    let resultXml = 0;
    if ( results != null ) {
        resultXml = Number(results?.['soap:Envelope']['soap:Body'][0].RecuperaTC_DiaResponse[0].RecuperaTC_DiaResult);
    }

    const monthString = (month < 10)  ? `0${month}`: month.toString();
    const dayString =  (day < 10)  ? `0${day}` : day.toString();
    return res.status(200).json({
        ok: true,
        data: { date: `${year}/${monthString}/${dayString}`, exchangeRate: resultXml }
    })
});

router.get('/getTCMes', async (req: Request, res: Response) => {
    const { year, month, day }: { year: number; month: number; day: number; } = getParams(req);
    const results = await fnGetTC<TipoCambioMes>(year, month, day);
    let TiposCambios: Tc[] = [];
    if (results != null) {
        TiposCambios =results['soap:Envelope']['soap:Body'][0].RecuperaTC_MesResponse[0].RecuperaTC_MesResult[0].Detalle_TC[0].Tc;
    }

    const monthString = (month < 10) ? `0${month}` : month.toString();
    const dayString = (day < 10) ? `0${day}` : day.toString();
    return res.status(200).json({
        ok: true,
        data: { yearMonth: `${year}-${monthString}}`, exchangesRate: TiposCambios }
    })
});

const getParams = (req: Request) => {
    const year: number = Number(req.query.year) || 0;
    const month: number = Number(req.query.month) || 0;
    const day: number = Number(req.query.day) || 0;
    return { year, month, day };
}

export default router;