import mutator from './mutator';
import mock_paths from './paths';
import fs from 'fs';

export default function mock(command, options) {
  
  let path = mock_paths() + mutator(command);
  let mock = fs.readFileSync(path);
      mock = mock.toString().trim();
      
  return mock;
}
