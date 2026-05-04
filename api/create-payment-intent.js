const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // 只允許 POST 請求
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  try {
    const { amount, currency } = req.body; // 前端傳入的金額與幣別
    // 建立 PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // 金額以最小單位計（例如 TWD 的「元」，USD 的「分」）
      currency: currency || 'twd',
      automatic_payment_methods: { enabled: true },
    });

    // 只回傳公開的 client_secret
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
