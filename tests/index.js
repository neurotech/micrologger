const test = require('tape');
const m = require('../index');

const config = require('../config');

test('Module exports correctly', (t) => {
  t.plan(1);
  t.equal(typeof m, 'object');
});

test('Correct configuration object present', (t) => {
  t.plan(5);
  t.equal(typeof config.host, 'string', 'micrologger db host present');
  t.equal(typeof config.port, 'string', 'micrologger db port present');
  t.equal(typeof config.user, 'string', 'micrologger db username present');
  t.equal(typeof config.password, 'string', 'micrologger db password present');
  t.equal(typeof config.database, 'string', 'micrologger db name present');
});

test('Config checks correctly', (t) => {
  t.plan(1);
  m.check.config(status => {
    t.equal(status, 'ok', 'config valid');
  });
});

test('Schema generates correctly', (t) => {
  t.plan(1);
  m.generate.schema(status => {
    t.equal(status, 'ok', 'schema generated');
  });
});

test('Schema checks properly', (t) => {
  t.plan(1);
  m.check.schema(status => {
    t.equal(status, 'ok', 'schema valid');
  });
});
