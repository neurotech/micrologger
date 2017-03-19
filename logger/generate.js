const path = require('path');
const fs = require('fs');
const pg = require('pg');
const config = require('../config');

module.exports = {
  schema: (cb) => {
    const ddl = fs.readFileSync(path.resolve(__dirname, './sql/ddl.sql'), { encoding: 'utf8' });
    const client = new pg.Client(config);
    client.connect(err => {
      if (err) { cb(err); }
      client.query(ddl, (err, result) => {
        if (err) { cb(err); }
        if (result) {
          client.end(err => {
            if (err) throw err;
            cb('ok');
          });
        }
      });
    });
  }
};
