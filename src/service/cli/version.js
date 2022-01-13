'use strict';

const packageJsonFile = require('../../../package.json');
const version = packageJsonFile.version;

module.exports = {
    name: '--version',
    run() {
      const version = packageJsonFile.version;
      console.info(version);
    }
  };
