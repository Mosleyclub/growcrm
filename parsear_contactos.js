// parsear_contactos.js
// Uso: node parsear_contactos.js "C:\ruta\a\Contactos_002.vcf"
//
// Lee un archivo .vcf exportado del celular, filtra los contactos cuyo
// nombre contenga alguna de las palabras clave, y muestra el resultado.
// Tambien guarda un archivo filtrados.json con la lista para el siguiente paso.

const fs = require('fs');
const path = require('path');

const KEYWORDS = ['growshop', 'grow shop', 'mayorista', 'distribuidor', 'cliente'];

const filePath = process.argv[2];
if (!filePath) {
  console.error('Falta la ruta del archivo. Uso: node parsear_contactos.js "C:\\ruta\\Contactos_002.vcf"');
  process.exit(1);
}

const raw = fs.readFileSync(filePath, 'utf8');

// Decodifica texto quoted-printable tipo =43=69=65=6E=74=65
function decodeQuotedPrintable(str) {
  return str.replace(/=([0-9A-Fa-f]{2})/g, (_, hex) => {
    return Buffer.from([parseInt(hex, 16)]).toString('latin1');
  }).toString('utf8') || str;
}

function fixEncoding(str) {
  try {
    const bytes = [];
    const decoded = str.replace(/=([0-9A-Fa-f]{2})/g, (_, hex) => {
      bytes.push(parseInt(hex, 16));
      return '';
    });
    if (bytes.length > 0) {
      // Reconstruimos reemplazando cada grupo por su byte real, luego interpretamos como UTF-8
      let result = '';
      let i = 0;
      const buf = Buffer.from(str.replace(/[^=0-9A-Fa-f]/g, (c) => c), 'binary');
    }
  } catch (e) {}
  return str;
}

// Version simple y robusta: junta todos los =XX en bytes reales y decodifica UTF-8
function decodeQP(line) {
  if (!line.includes('=')) return line;
  const bytes = [];
  let i = 0;
  while (i < line.length) {
    if (line[i] === '=' && /[0-9A-Fa-f]{2}/.test(line.substr(i + 1, 2))) {
      bytes.push(parseInt(line.substr(i + 1, 2), 16));
      i += 3;
    } else {
      bytes.push(line.charCodeAt(i));
      i += 1;
    }
  }
  return Buffer.from(bytes).toString('utf8');
}

const vcards = raw.split(/BEGIN:VCARD/i).slice(1);

const contactos = [];

for (const block of vcards) {
  const lines = block.split(/\r?\n/);

  let fn = null;
  let phones = [];

  for (let line of lines) {
    if (line.startsWith('FN')) {
      const idx = line.indexOf(':');
      let value = line.substring(idx + 1);
      if (line.includes('QUOTED-PRINTABLE')) {
        value = decodeQP(value);
      }
      fn = value.trim();
    }
    if (line.startsWith('TEL')) {
      const idx = line.indexOf(':');
      const value = line.substring(idx + 1).trim();
      if (value && !phones.includes(value)) phones.push(value);
    }
  }

  if (fn) {
    contactos.push({ nombre: fn, telefonos: phones });
  }
}

console.log(`Total de contactos leidos: ${contactos.length}`);

const filtrados = contactos.filter(c => {
  const nombreLower = c.nombre.toLowerCase();
  return KEYWORDS.some(kw => nombreLower.includes(kw));
});

console.log(`\nContactos que matchean palabras clave (${KEYWORDS.join(', ')}): ${filtrados.length}\n`);

filtrados.forEach((c, i) => {
  console.log(`${i + 1}. ${c.nombre} - Tel: ${c.telefonos.join(' / ') || 'SIN TELEFONO'}`);
});

const outPath = path.join(path.dirname(filePath), 'filtrados.json');
fs.writeFileSync(outPath, JSON.stringify(filtrados, null, 2), 'utf8');
console.log(`\nGuardado en: ${outPath}`);
console.log('Revisa la lista de arriba. Si esta bien, avisame y seguimos con la carga a Firestore.');
