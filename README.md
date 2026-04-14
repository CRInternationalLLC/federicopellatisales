# Federico Pellati — Sito Ufficiale

Sito web di Federico Pellati, Sales Coach & Business Strategist.

## Struttura

```
/
├── public/
│   └── index.html      ← sito completo (single-file)
├── server.js           ← server Express
├── package.json
└── .gitignore
```

## Sviluppo locale

```bash
npm install
npm start
# → http://localhost:3000
```

## Deploy su Railway

1. Fai push su GitHub
2. Vai su [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**
3. Seleziona il repository
4. Railway rileva automaticamente Node.js e usa `npm start`
5. Il sito è live in ~2 minuti

> **Variabile d'ambiente opzionale:** `PORT` è gestita automaticamente da Railway.

## Personalizzazioni da fare prima del deploy

| Cosa | Dove |
|------|------|
| Foto di Federico | `<img src="...">` nella sezione Chi Sono (cerca il commento `← Sostituire con foto reale`) |
| Video YouTube | JS in fondo: `var VID='dQw4w9WgXcQ'` → metti l'ID reale del video |
| Telefono | Sezione Contatti → `+39 XXX XXX XXXX` |
| Email | Sezione Contatti → `info@federicopellati.com` |
| P.IVA | Footer → `P.IVA XXXXXXXXXX` |
| URL canonical | Meta tag `og:url` → `https://federicopellati.com` (o dominio reale) |
| Instagram link | Footer + sezione Chi Sono |

## Dominio custom su Railway

Dopo il deploy: **Settings → Domains → Add Custom Domain** → inserisci il dominio.
