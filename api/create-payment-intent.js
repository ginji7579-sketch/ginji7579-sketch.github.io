const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import { serviceCatalog } from '../shared/services';

export default async function handler(req, res) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { items, currency } = req.body; // 前端傳入的項目
    
    if (!Array.isArray(items)) {
      throw new Error('無效的購物車資料');
    }

    // 在後端重新計算金額，防止前端竄改
    let totalAmount = 0;
    for (const cartItem of items) {
      const service = serviceCatalog.find(s => s.id === cartItem.id);
      if (service && service.price) {
        totalAmount += service.price * (cartItem.quantity || 1);
      }
    }

    if (totalAmount <= 0) {
      throw new Error('無效的金額');
    }

    // 建立 PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount, // 使用後端計算的金額
      currency: currency || 'twd',
      automatic_payment_methods: { enabled: true },
    });

    // 只回傳公開的 client_secret
    res.status(200).json({ 
      clientSecret: paymentIntent.client_secret,
      amount: totalAmount
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
