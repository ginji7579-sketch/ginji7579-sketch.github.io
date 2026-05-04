export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  // 綠界 Server-to-Server 回傳，需回覆 1|OK
  res.status(200).send('1|OK');
}
