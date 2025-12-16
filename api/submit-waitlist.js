export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    // Validate required fields
    if (!data.email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Forward to n8n webhook (hidden from client)
    const webhookUrl = 'https://n8n.thebrightidea.ai/webhook/waitlist';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Webhook request failed');
    }

    const result = await response.json();

    return res.status(200).json({
      success: true,
      message: 'Waitlist submission successful',
      data: result
    });

  } catch (error) {
    console.error('Error submitting to waitlist:', error);
    return res.status(500).json({
      error: 'Failed to submit waitlist data',
      message: error.message
    });
  }
}
