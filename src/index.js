'use strict';

const nameLength = require('./name-length.js');
const setPromise = require('./set-promise.js');

module.exports = {
  rules: {
    'name-length': nameLength,
    'set-promise': setPromise
  }
};
