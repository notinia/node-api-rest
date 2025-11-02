import express from 'express';
import * as diaryServices from '../services/diary-service.js';
import toNewDiaryEntry from '../utils.js';

/* -- RUTAS (no lógica) -- */

const router = express.Router();

// Endpoint #1: GET /api/diaries
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
  console.log('Fetching all diary entries');
});

// Endpoint #2: POST /api/diaries
router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);

    const newEntry = diaryServices.addDiaryEntry(newDiaryEntry);

    res.json(newEntry);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Endpoint #3: GET /api/diaries/:id
// localhost:3000/api/diaries/2 <-- ejemplo de llamada

router.get('/:id', (req, res) => {
  const entry = diaryServices.findById(+req.params.id);
  if (entry != null) {
    return res.send(entry);
  } else {
    return res.status(404).send({ error: 'Diary entry not found' });
  }
});

// Endpoint #4: DELETE /api/diaries/:id
// localhost:3000/api/diaries/2 <-- ejemplo de llamada

router.delete('/:id', (req, res) => {
  const deleteEntry = diaryServices.removeDiaryEntry(+req.params.id);
  if (deleteEntry) {
    return res.status(200).send(`Succesfully deleted entry ${req.params.id}`);
  } else {
    return res.status(500).send({ error: 'Could not delete entry' });
  }
});

export default router;
