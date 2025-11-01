import type { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
import diaryData from './diary-entries.json';

/* -- LÓGICA DE NEGOCIO (metodos basicos del servicio) -- */

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => diaries;

export const addEntry = (): undefined => undefined;
