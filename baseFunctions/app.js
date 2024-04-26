import {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovieById,
  deleteMovieById,
} from './movies/index.js';
import yargs from 'yargs';
import {program} from 'commander';

const invokeAction = async ({action, id, ...data}) => {
  switch (action) {
    case 'list':
      const allMuvies = await getAllMovies ();
      return console.log (allMuvies);
    case 'getById':
      const oneMovie = await getMovieById (id);
      return console.log (oneMovie);
    case 'addMovie':
      const newMovie = await addMovie (data);
      return console.log (newMovie);
    case 'updateById':
      const updateMovie = await updateMovieById (id, data);
      return console.log (updateMovie);
    case 'deleteById':
      const deleteMovie = await deleteMovieById (id);
      return console.log (deleteMovie);
    default:
      return console.log ('Uknown action');
  }
};
// invokeAction({ action: 'list' });
// invokeAction ({action: 'getById',id:'u9kgwNWGi3uUUwh0b8V49'});
// invokeAction ({
//   action: ' ',
//   title: 'I Am Legend',
//   director: 'Francis Lawrence',
// });
// invokeAction ({
//   action: 'updateById',
//   id: 'ifhM37QgbH1Bf9bG_gqRk',
//   title: 'I Am Legend-ubdeted',
// });
// invokeAction({action:'deleteById',id:'Sb5SqJXs2mgLxxVJRHka2'})

// Base - process.argv
// const arg = process.argv.slice(2)
// invokeAction({ action: arg[1] })

// Yarg - process.argv
// const result = yargs(process.argv)
// const { _, $0, ...actionData } = result.argv
// console.log(actionData)
// invokeAction(actionData)

// Commander - process.argv
program
  .option('-a, --action <type>')
  .option('--id <type>')
  .option('--title <type>')
  .option('--director <type>')
program.parse()
const options = program.opts()
invokeAction(options)

