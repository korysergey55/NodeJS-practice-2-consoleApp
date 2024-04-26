import fs from 'fs/promises';
import path from 'path';

export const printPAth = async () => {
  const currentPath = path.resolve('movies', 'movies.json')
  const appPath = path.resolve('app', 'app.js')
  
  console.log(currentPath);
  console.log(appPath);
  
  const files = await fs.readFile(currentPath)
  return JSON.parse(files)
};
const files = await printPAth();
console.log(files)


