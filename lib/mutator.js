import fs from 'fs';
import mock_paths from './paths';
export default function mutator(cmd) {
  
  let adb = "/adb/command.mock";
  
  let package_;
  let package_regex = /[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]/i;
  let cmd_with_packages = /dumpsys package/; 
  if(cmd_with_packages.test(cmd)) {
    package_ = cmd.match(package_regex)[0];
    cmd = cmd.replace(package_regex, "");
  }
  
  let cmd_with_device_id = /-s [\w\d]+/;
  if(cmd_with_device_id.test(cmd)) {
    cmd = cmd.replace(cmd_with_device_id, "");
  }

  let cmd_with_extra_params = /-f [\w\s\d]+/
  if(cmd_with_extra_params.test(cmd)) {
    cmd = cmd.replace(/-f\s+[\s\w\d]+/ig, "")
  }
  
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
    if(err == undefined) return [mock, package_];
    
  }catch(e){ }
  return [adb, package_];
}
