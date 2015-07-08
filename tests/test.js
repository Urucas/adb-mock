import mock from '../lib/';
import mutator from '../lib/mutator';

describe("Mutator instance test", () => {
  
  it("Test adb command", (done) => {
    let mock = mutator("adb");
    if(mock != "/adb/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });
  
  it("Test adb version command", (done) => {
    let mock = mutator("adb version");
    if(mock != "/adb/version/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });
  
  it("Test adb devices command", (done) => {
    let mock = mutator("adb devices");
    if(mock != "/adb/devices/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });

  it("Test undefined command", (done) => {
    let mock = mutator("adb shell");
    if(mock != "/adb/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });
  
});
