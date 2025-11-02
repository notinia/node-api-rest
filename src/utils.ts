import { Weather, Visibility } from './enums';
import type { NewDiaryEntry } from './types';

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment');
  }

  return commentFromRequest;
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date');
  }

  return dateFromRequest;
};

/*  Metodos que parsean segun los ENUMS o Tipos creados en types.ts */

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather');
  }

  return weatherFromRequest as Weather;
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility');
  }

  return visibilityFromRequest as Visibility;
};

/* Metodo que comprueba si es de tipo string o si pertenece a la clase String */

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {

    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  };

  return newEntry;
};

export default toNewDiaryEntry;
