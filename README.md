# adb-mock [![Build Status](https://travis-ci.org/Urucas/adb-mock.svg)](https://travis-ci.org/Urucas/adb-mock)
Mock adb responses on machines than doesnt have adb installed and a connected device to run tests.

#Usage
```bash
npm install --save adb-mock
```

Integrate with travis, inside your ```.travis.yml``` set
```
before_script:
  - export PATH=$PATH:./node_modules/adb-mock/bin/
```
Used in [adbjs](https://github.com/Urucas/adbjs) tests
