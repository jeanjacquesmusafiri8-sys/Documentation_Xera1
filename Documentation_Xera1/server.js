const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const envPath = path.join(root, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*["']?(.*?)["']?\s*$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

function collectFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(entryPath);
    return entry.name.endsWith('.mdx') ? [entryPath] : [];
  });
}

function cleanMdx(source) {
  return source.replace(/^---[\s\S]*?---\s*/, '').replace(/<[^>]+>/g, '').replace(/[*_`#>-]/g, ' ').replace(/\s+/g, ' ').trim();
}

function readDocs() {
  return collectFiles(root).map(filePath => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const title = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] || path.basename(filePath, '.mdx');
    return { path: path.relative(root, filePath).replaceAll('\\', '/'), title, text: cleanMdx(raw) };
  });
}

function send(response, status, data, contentType = 'application/json; charset=utf-8') {
  response.writeHead(status, { 'Content-Type': contentType, 'Cache-Control': 'no-store' });
  response.end(contentType.startsWith('application/json') ? JSON.stringify(data) : data);
}

async function answer(question, docs) {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key.includes('votre_cle')) throw new Error('GEMINI_API_KEY_MISSING');
  const context = docs.map(doc => `\n## ${doc.title} (${doc.path})\n${doc.text}`).join('\n');
  const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: 'Réponds en français, de façon concise et précise. Utilise uniquement la documentation fournie. Si la réponse ne s’y trouve pas, dis-le clairement.' }] },
      contents: [{ parts: [{ text: `Documentation Xera 1 :${context}\n\nQuestion : ${question}` }] }]
    })
  });
  if (!result.ok) throw new Error(`GEMINI_${result.status}`);
  const data = await result.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Je n’ai pas trouvé de réponse dans la documentation.';
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === 'GET' && request.url === '/api/health') return send(response, 200, { configured: Boolean(process.env.GEMINI_API_KEY && !process.env.GEMINI_API_KEY.includes('votre_cle')) });
    if (request.method === 'GET' && request.url === '/api/docs') return send(response, 200, readDocs());
    if (request.method === 'POST' && request.url === '/api/ask') {
      let body = ''; for await (const chunk of request) body += chunk;
      const question = JSON.parse(body).question?.trim();
      if (!question) return send(response, 400, { error: 'Question vide.' });
      return send(response, 200, { answer: await answer(question, readDocs()) });
    }
    const requested = request.url === '/' ? '/docs.html' : request.url.split('?')[0];
    const filePath = path.resolve(root, `.${requested}`);
    if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) return send(response, 404, { error: 'Not found' });
    const type = filePath.endsWith('.html') ? 'text/html; charset=utf-8' : filePath.endsWith('.svg') ? 'image/svg+xml' : filePath.endsWith('.png') ? 'image/png' : 'application/octet-stream';
    return send(response, 200, fs.readFileSync(filePath), type);
  } catch (error) {
    const status = error.message === 'GEMINI_API_KEY_MISSING' ? 503 : 500;
    return send(response, status, { error: status === 503 ? 'Ajoutez GEMINI_API_KEY dans .env.' : 'Erreur serveur.' });
  }
});

server.listen(port, () => console.log(`Documentation Xera 1 : http://localhost:${port}`));
