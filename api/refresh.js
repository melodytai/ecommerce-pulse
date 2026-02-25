export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          tools: [{ google_search: {} }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4000
          }
        })
      }
    );

    const raw = await geminiRes.text();

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      console.error('Failed to parse Gemini response:', raw.slice(0, 500));
      return res.status(500).json({ error: 'Invalid response from Gemini' });
    }

    if (data.error) {
      console.error('Gemini API error:', data.error);
      return res.status(500).json({ error: data.error.message });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!text) {
      console.error('Empty Gemini response:', JSON.stringify(data).slice(0, 500));
      return res.status(500).json({ error: 'Empty response from Gemini' });
    }

    return res.status(200).json({ text });

  } catch (err) {
    console.error('Handler error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
