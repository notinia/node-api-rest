/** Data Types for Diary Entries */

import { Weather, Visibility } from './enums.js';

// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'windy';

/*
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

// export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}

*/

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

/* NOTAR COMO SE APROVECHA LA REUTILIZACION DE TIPOS */

/* MEJOR PRÁCTICA: Usar utilidades (Pick, Omit) de Typescript */

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

// Nuevo tipo para nuevas entradas (sin id).
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
