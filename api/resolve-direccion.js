// Funcion serverless (Vercel). Recibe un link de "Compartir" de Google Maps
// (puede ser corto tipo https://maps.app.goo.gl/xxxx o largo con @lat,lng),
// sigue la redireccion si hace falta, saca las coordenadas, y le pide a
// Google la direccion real (reverse geocoding) para autocompletar el campo.
//
// Google a veces le muestra una pagina distinta (o un salto por JavaScript)
// a un pedido que no parece un navegador, asi que mandamos un User-Agent
// real, buscamos coordenadas tanto en la URL final como en el HTML de la
// pagina, y si nada de eso aparece, probamos geocodificar por el nombre
// del lugar que haya quedado en la URL como ultimo respaldo.

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

function buscarCoords(texto) {
  let m = texto.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/)
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) }
  m = texto.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/)
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) }
  m = texto.match(/[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/)
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) }
  m = texto.match(/"?(-?\d{1,2}\.\d{4,}),(-?\d{1,3}\.\d{4,})"?\s*\]/)
  if (m) return { lat: parseFloat(m[1]), lng: parseFloat(m[2]) }
  return null
}

function extraerNombreLugar(url) {
  const m = url.match(/\/maps\/place\/([^/@]+)/)
  if (!m) return null
  try { return decodeURIComponent(m[1]).replace(/\+/g, ' ') } catch (e) { return m[1].replace(/\+/g, ' ') }
}

async function geocodeTexto(direccion, key) {
  async function intentar(texto) {
    const geoRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(texto)}&region=ar&language=es&key=${key}`)
    return geoRes.json()
  }
  let geoData = await intentar(direccion)
  if (geoData?.results?.length > 0) return geoData
  if (!/argentina/i.test(direccion)) {
    geoData = await intentar(`${direccion}, Argentina`)
  }
  return geoData
}

export default async function handler(req, res) {
  try {
    const url = req.query.url
    const direccion = req.query.direccion
    const key = process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyCKieIR_467GcFB3pDXLyDac_bp6lsnpFk'

    // Modo B: geocodificar directo una direccion de texto (para optimizar rutas)
    if (!url && direccion) {
      const geoData = await geocodeTexto(direccion, key)
      const resultado = geoData?.results?.[0]
      if (resultado) {
        const { lat, lng } = resultado.geometry.location
        return res.status(200).json({ ok: true, lat, lng, direccion: resultado.formatted_address, geocodeStatus: geoData.status, via: 'direccion-texto' })
      }
      return res.status(200).json({ ok: false, reason: 'sin-resultado', geocodeStatus: geoData.status })
    }

    if (!url) {
      return res.status(400).json({ ok: false, reason: 'sin-url' })
    }

    let finalUrl = url
    let html = ''
    try {
      const resolved = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        headers: { 'User-Agent': UA, 'Accept-Language': 'es-AR,es;q=0.9' },
      })
      if (resolved && resolved.url) finalUrl = resolved.url
      try { html = await resolved.text() } catch (e) { /* ignorar */ }
    } catch (e) {
      // Si no se puede seguir el redirect, seguimos con la url original
    }

    let coords = buscarCoords(finalUrl)
    if (!coords && html) coords = buscarCoords(html)

    if (coords) {
      const geoRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&language=es&key=${key}`)
      const geoData = await geoRes.json()
      const direccion = geoData?.results?.[0]?.formatted_address || ''
      return res.status(200).json({ ok: true, lat: coords.lat, lng: coords.lng, direccion, geocodeStatus: geoData.status, via: 'coordenadas' })
    }

    // Respaldo: no encontramos coordenadas, probamos buscar por el nombre del lugar que quedo en la URL
    const nombreLugar = extraerNombreLugar(finalUrl)
    if (nombreLugar) {
      const geoData = await geocodeTexto(nombreLugar, key)
      const resultado = geoData?.results?.[0]
      if (resultado) {
        const { lat, lng } = resultado.geometry.location
        return res.status(200).json({ ok: true, lat, lng, direccion: resultado.formatted_address, geocodeStatus: geoData.status, via: 'nombre-lugar' })
      }
    }

    return res.status(200).json({ ok: false, reason: 'sin-coordenadas', finalUrl })
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) })
  }
}
