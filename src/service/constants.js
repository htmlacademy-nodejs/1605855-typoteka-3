'use strict';

module.exports.DEFAULT_COUNT = 1;
module.exports.FILE_NAME = 'mocks.json';

module.exports.DATES = [
  '2021-10-11T00:00:00.000Z',
  '2021-11-20T00:00:00.000Z',
  '2021-12-05T00:00:00.000Z',
  '2021-10-01T00:00:00.000Z',
  '2022-01-03T00:00:00.000Z',
  '2022-01-08T00:00:00.000Z',
];

module.exports.USER_ARGV_INDEX = 2;

module.exports.ExitCode = {
  error: 1,
  success: 0,
};

module.exports.HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};