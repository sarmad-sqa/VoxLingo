/**
 * Same-origin TTS proxy so the browser can capture real audio into the recording.
 * Cross-origin Google TTS playback is audible, but captureStream() stays silent.
 */
module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.status(204).end()
    return
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const q = typeof req.query.q === 'string' ? req.query.q.trim() : ''
  const tl = typeof req.query.tl === 'string' && req.query.tl ? req.query.tl : 'en'

  if (!q) {
    res.status(400).json({ error: 'Missing q' })
    return
  }
  if (q.length > 200) {
    res.status(400).json({ error: 'Text too long for one TTS chunk (max 200)' })
    return
  }

  const upstream = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(tl)}&q=${encodeURIComponent(q)}`

  try {
    const response = await fetch(upstream, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: '*/*',
        Referer: 'https://translate.google.com/',
      },
    })

    if (!response.ok) {
      res.status(response.status).json({ error: 'Upstream TTS failed', status: response.status })
      return
    }

    const buffer = Buffer.from(await response.arrayBuffer())
    if (!buffer.length) {
      res.status(502).json({ error: 'Empty TTS audio' })
      return
    }

    res.setHeader('Content-Type', 'audio/mpeg')
    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send(buffer)
  } catch (err) {
    res.status(502).json({ error: 'TTS proxy error', detail: String(err && err.message ? err.message : err) })
  }
}
