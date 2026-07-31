import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message, _gotcha } = req.body || {};

  // honeypot
  if (_gotcha) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const TO_EMAIL = process.env.TO_EMAIL;
  const FROM_EMAIL = process.env.FROM_EMAIL;

  if (!process.env.SENDGRID_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
    console.error('Missing SendGrid configuration');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    await sgMail.send({
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `Contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p>From: ${name} &lt;${email}&gt;</p><p>${message}</p>`,
      replyTo: email,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SendGrid error', err);
    return res.status(500).json({ error: 'Email send failed' });
  }
}
