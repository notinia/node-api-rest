import type { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';
import diaryData from './diary-entries.json';

/* -- LÓGICA DE NEGOCIO (metodos basicos del servicio) -- */

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

/* Devolver todas las entradas del diario */

export const getEntries = (): DiaryEntry[] => diaries;

/* Buscar una entrada por su id */
/* undefined --> si no la encuentra */

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id);
  if (entry != null) {
    return entry;
  }
  return undefined;
};

/* Devolver todas las entradas sin la información sensible */
/* Usando utilidades de Typescript (Omit) */

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    };
  });
};

/* Añadir una nueva entrada al diario */

export const addDiaryEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const diaryEntry = {
    id: diaries.length + 1,
    ...newDiaryEntry
  };

  diaries.push(diaryEntry);
  return diaryEntry;
};

export const removeDiaryEntry = (id: number): boolean => {
  const entry = findById(id);
  if (entry != null) {
    diaries.splice(diaries.indexOf(entry), 1);
    return true;
  }
  return false;
};
