/** Data Types for Diary Entries */

export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'windy';

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/* === MALA PRÁCTICA: Abusar de la creación de tipos === */

/*

export interface NonSensitiveDiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
}
    ==> Aquí hay trozos que me sirven! los atributos.
    ==> Puedo reutilizarlos en otro lado. Es DDD (Domain Driven Design).
*/

/* MEJOR PRÁCTICA: Usar utilidades (Pick, Omit) de Typescript */

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;
