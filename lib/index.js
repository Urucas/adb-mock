import mutator from './mutator';

export default function mock(command, options) {
  
  let mock = mutator(command);
  console.log(mock);
}
