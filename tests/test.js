import mock from '../lib/';
import mutator from '../lib/mutator';
import mock_paths from '../lib/paths';

describe("Mutator instance test", () => {
  
  it("Test adb command", (done) => {
    let [mock, package_] = mutator("adb");
    if(mock != "/adb/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });
  
  it("Test adb version command", (done) => {
    let [mock, package_] = mutator("adb version");
    if(mock != "/adb/version/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });
  
  it("Test adb devices command", (done) => {
    let [mock, package_] = mutator("adb devices");
    if(mock != "/adb/devices/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });

  it("Test undefined command", (done) => {
    let [mock, package_] = mutator("adb wrong command");
    if(mock != "/adb/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });

  it("Test shell dumpsys package command", (done) => {
    let [mock, package_] = mutator("adb shell dumpsys package com.urucas.zoster_testapp");
    if(mock != "/adb/shell/dumpsys/package/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });

  it("Test shell getprop command", (done) => {
    let [mock, package_] = mutator("adb shell getprop");
    if(mock != "/adb/shell/getprop/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });

  it("Test shell getprop command ro.product.model", (done) => {
    let [mock, package_] = mutator("adb shell getprop ro.product.model");
    if(mock != "/adb/shell/getprop/ro.product.model/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });

  it("Test shell getprop command ro.build.version.release", (done) => {
    let [mock, package_] = mutator("adb shell getprop ro.build.version.release");
    if(mock != "/adb/shell/getprop/ro.build.version.release/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });

  it("Test shell ps command", (done) => {
    let [mock, package_] = mutator("adb shell ps");
    if(mock != "/adb/shell/ps/command.mock") throw new Error("returns wrong mock:"+mock);
    done();
  });
  
});
