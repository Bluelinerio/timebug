require('babel-polyfill');
const apollo = require('apollo-client')
const detox = require('detox');
const config = require('../package.json').detox;

before(async () => {
  await detox.init(config);
});

after(async () => {
  //comment for windows use
  // await detox.cleanup();
});

beforeEach(async () => {
  await device.reloadReactNative();
})