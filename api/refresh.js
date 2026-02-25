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
    console.log('Gemini status:', geminiRes.status);
    console.log('Gemini response (first 1000 chars):', raw.slice(0, 1000));

    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      console.error('JSON parse failed:', raw.slice(0, 500));
      return res.status(500).json({ error: 'Invalid JSON from Gemini' });
    }

    if (data.error) {
      console.error('Gemini API error:', JSON.stringify(data.error));
      return res.status(500).json({ error: data.error.message });
    }

    // Extract text — with google_search, response may have multiple parts
    const parts = data.candidates?.[0]?.content?.parts || [];
    console.log('Parts count:', parts.length);
    console.log('Finish reason:', data.candidates?.[0]?.finishReason);
    
    let text = parts.map(p => p.text || '').join('');
    
    // Strip markdown code fences if present
    text = text.replace(/^```json\s*/i, '').replace(/```\s*$/, '').trim();
    
    console.log('Extracted text (first 500):', text.slice(0, 500));

    if (!text) {
      return res.status(500).json({ error: 'Empty response from Gemini' });
    }

    return res.status(200).json({ text });

  } catch (err) {
    console.error('Handler error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
