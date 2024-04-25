import fs from 'fs/promises';
import path from 'path';
import {nanoid} from 'nanoid';

const moviesPath = path.resolve ('movies', 'movies.json');

const updateMovies =  muvies =>
   fs.writeFile (moviesPath, JSON.stringify (muvies, null, 1));

export const getAllMovies = async () => {
  const data = await fs.readFile (moviesPath, 'utf-8');
  return JSON.parse (data);
};

export const getMovieById = async id => {
  const movies = await getAllMovies ();
  const result = movies.find (item => item.id === id);
  return result || null;
};
export const addMovie = async data => {
  const muvies = await getAllMovies ();
  const newMuvie = {
    id: nanoid (),
    ...data,
  };
  muvies.push (newMuvie);
  await updateMovies (muvies);
  return newMuvie;
};

export const updateMovieById = async (id, data) => {
  const movies = await getAllMovies ();
  const index = movies.findIndex (item => item.id === id);
  if (index === -1) {
    return null;
  }
  movies[index] = {...movies[index], ...data};
  await updateMovies (movies);
  return movies[index];
};
export const deleteMovieById = async (id) => {
  const movies = await getAllMovies();
  const index = movies.findIndex((item) => item.id === id)
  if (index === -1) {
    return null
  }
  const results = movies.splice(index, 1)
  await updateMovies(movies)
  return results[0]
}