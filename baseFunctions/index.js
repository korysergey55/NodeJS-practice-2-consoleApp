import fs from 'fs/promises';
import path from 'path';

export const printCurrentPAth = async () => {
  console.log (path.resolve('app','app.js'));
};
