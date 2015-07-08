import fs from 'fs';
import mock_paths from './paths';
export default function mutator(cmd) {
  
  let adb = "/adb/command.mock";

  // transform a command into the current file mock path
  let command = cmd || "adb";
      command = command.trim().replace(/^\//ig, "");

  let mock = command.split(/\s+/);
      mock.unshift("");
      mock.push("command.mock");
      mock = mock.join("/");
  
  let mock_path = mock_paths() + mock;
  try { 
    let err = fs.accessSync(mock_path, fs.R_OK);
    if(err == undefined) return mock;
    
  }catch(e){ }
  return adb;
}
