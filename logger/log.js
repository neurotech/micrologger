const pg = require('pg');
const config = require('../config');
const sql = require('../sql/generate-insert');

let _insert = (level, data, cb) => {
  let insert = sql(level, data);
  let db = new pg.Client(config);
  db.connect(err => {
    if (err) { throw err; }
    db.query(insert, (err, result) => {
      if (err) { throw err; }
      cb(`${result.command.toLowerCase()} ok`);
      db.end(err => { if (err) throw err; });
    });
  });
};

module.exports = {
  critical: (data, cb) => { _insert('critical', data, cb); },
  error: (data, cb) => { _insert('error', data, cb); },
  warning: (data, cb) => { _insert('warning', data, cb); },
  info: (data, cb) => { _insert('info', data, cb); },
  debug: (data, cb) => { _insert('debug', data, cb); }
};
