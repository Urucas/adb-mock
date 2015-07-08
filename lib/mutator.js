import fs from 'fs';
export default function mutator(cmd) {
  
  let mock_paths = "../mock";
  let adb = "/adb/command.mock";

  // transform a command into the current file mock path
  let command = cmd || "adb";
      command = command.trim().replace(/^\//ig, "");

  let mock = command.split(/\s+/);
      mock.unshift("");
      mock.push("command.mock");
      mock = mock.join("/");
  
  let mock_path = __dirname + "/" + mock_paths + mock;
  try { 
    let err = fs.accessSync(mock_path, fs.R_OK);
    if(err == undefined) return mock;
    
  }catch(e){ }
  return adb;
}
