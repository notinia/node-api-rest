import express from 'express';
import diarieRouter from './routes/diaries.js';

/* Simple express server */

const app = express();
app.use(express.json()); // middleware que ==> req.body -> json

const PORT = 3000;

/* === Funcionalidades  === */
/* Devolver todas las entradas del diario (diary-entries.json) */

// En la ruta /api/diaries se usa --> diarieRouter
app.use('/api/diaries', diarieRouter);

// _req indica que se ignora
app.get('/ping', (_req, res) => {
  console.log('Pingeado papu :V ' + new Date().toISOString());
  res.send('Pong');
});

app.listen(PORT, () => {
  console.log(`Server corriendo en ${PORT}`);
});
