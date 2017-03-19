const test = require('tape');
const micro = require('../index');

const config = require('../config');

test('Module exports correctly', (t) => {
  t.plan(1);
  t.equal(typeof micro, 'object');
});

test('Correct configuration object present', (t) => {
  t.plan(5);
  t.equal(typeof config.host, 'string', 'pg-micrologger db host present');
  t.equal(typeof config.port, 'string', 'pg-micrologger db port present');
  t.equal(typeof config.user, 'string', 'pg-micrologger db username present');
  t.equal(typeof config.password, 'string', 'pg-micrologger db password present');
  t.equal(typeof config.database, 'string', 'pg-micrologger db name present');
});

test('Config checks correctly', (t) => {
  t.plan(1);
  micro.check.config(status => {
    t.equal(status, 'ok', 'config valid');
  });
});

test('Schema generates correctly', (t) => {
  t.plan(1);
  micro.generate.schema(status => {
    t.equal(status, 'ok', 'schema generated');
  });
});

test('Schema checks properly', (t) => {
  t.plan(1);
  micro.check.schema(status => {
    t.equal(status, 'ok', 'schema valid');
  });
});

test('Log a critical message.', (t) => {
  t.plan(1);
  micro.log.critical({
    application: `pg-micrologger`,
    domain: `testing`,
    task: `critical-message`,
    message: `CRITICAL INCIDENT 632892724`
  }, (status) => {
    t.equal(status, 'insert ok', 'logged a CRITICAL message.');
  });
});

test('Log an error message.', (t) => {
  t.plan(1);
  micro.log.error({
    application: `pg-micrologger`,
    domain: `testing`,
    task: `error-message`,
    message: `Error occurred in appname!`
  }, (status) => {
    t.equal(status, 'insert ok', 'logged an ERROR message.');
  });
});

test('Log a warning message.', (t) => {
  t.plan(1);
  micro.log.warning({
    application: `pg-micrologger`,
    domain: `testing`,
    task: `warning-message`,
    message: `Warning: Server 2437 is almost out of memory.`
  }, (status) => {
    t.equal(status, 'insert ok', 'logged a WARNING message.');
  });
});

test('Log an info message.', (t) => {
  t.plan(1);
  micro.log.info({
    application: `pg-micrologger`,
    domain: `testing`,
    task: `info-message`,
    message: `FYI, your application has broken it's own record for most concurrent users.`
  }, (status) => {
    t.equal(status, 'insert ok', 'logged an INFO message.');
  });
});

test('Log a debug message.', (t) => {
  t.plan(1);
  micro.log.debug({
    application: `pg-micrologger`,
    domain: `testing`,
    task: `debug-message`,
    message: `Line 26 is unreachable code.`
  }, (status) => {
    t.equal(status, 'insert ok', 'logged a DEBUG message.');
  });
});
