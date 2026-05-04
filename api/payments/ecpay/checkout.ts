import { createEcpayCheckout } from '../../../server/payments/ecpay';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const payload = createEcpayCheckout(req.body, req.headers);
    res.status(200).json(payload);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : '建立付款單失敗',
    });
  }
}
