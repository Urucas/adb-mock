import mutator from './mutator';
import mock_paths from './paths';
import fs from 'fs';

export default function mock(command) {
   
  let [adb, package_] = mutator(command);
  let path = mock_paths() + adb;
  let mock = fs.readFileSync(path);
      mock = mock.toString().trim();
      
  return mock;
}
