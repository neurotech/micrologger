const path = require('path');
const fs = require('fs');
const assert = require('assert');
const pg = require('pg');
const config = require('../config');

module.exports = {
  config: (cb) => {
    let checked = {};
    if (!assert.equal(typeof config.host, 'string', 'Config is missing a value for host!')) {
      checked.host = 'ok';
    }
    if (!assert.equal(typeof config.port, 'string', 'Config is missing a value for port!')) {
      checked.port = 'ok';
    }
    if (!assert.equal(typeof config.user, 'string', 'Config is missing a value for user!')) {
      checked.user = 'ok';
    }
    if (!assert.equal(typeof config.password, 'string', 'Config is missing a value for password!')) {
      checked.password = 'ok';
    }
    if (!assert.equal(typeof config.database, 'string', 'Config is missing a value for database!')) {
      checked.database = 'ok';
    }
    if (Object.keys(checked).length === 5) {
      cb('ok');
    } else {
      cb('not ok');
    }
  },
  schema: (cb) => {
    const goal = ['critical', 'debug', 'error', 'info', 'warning'];
    const check = fs.readFileSync(path.resolve(__dirname, './sql/check-schema.sql', { encoding: 'utf8' }));
    const client = new pg.Client(config);
    client.connect(err => {
      if (err) { cb(err); }
      client.query(check, (err, result) => {
        if (err) { cb(err); }
        if (result.rows[0].json_agg.join() === goal.join()) {
          client.end(err => {
            if (err) throw err;
            cb('ok');
          });
        } else {
          cb('not ok');
        }
      });
    });
  }
};
