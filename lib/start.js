import child_process from 'child_process';
export default function start() {
  let spawn = child_process.spawn("../bin/adb", []);
  return spawn;
}
