# Resume Generator (MERN)

## Run locally

### Backend
```bash
cd backend
npm i
# set MONGO_URI in .env
npm run dev
```

### Frontend
```bash
cd frontend
npm i
cp .env.example .env # optional, edit VITE_API_BASE if needed
npm run dev
```

Open http://localhost:5173

## Deploy
- Frontend: Vercel/Netlify (build with `vite`).
- Backend: Render/Heroku (set env var `MONGO_URI`).
- Database: MongoDB Atlas.
