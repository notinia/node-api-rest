import express from 'express';
import * as diaryServices from '../services/diary-service.js';

/* -- RUTAS (no lógica) -- */

const router = express.Router();

// Endpoint #1: GET /api/diaries
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
  console.log('Fetching all diary entries');
});

// Endpoint #2: POST /api/diaries
router.post('/', (_req, res) => {
  res.send('Creating a new diary entry');
  console.log('Creating a new diary entry');
});

export default router;
