# pg-micrologger

Route your log messages to a PostgreSQL database.

## Installation

### Using [Yarn](https://yarnpkg.com/):

`yarn add pg-micrologger`

### Using [npm](https://www.npmjs.com/):

`npm install pg-micrologger --save`

## Configuration

`pg-micrologger` reads configuration values via environment variables:

Environment Variable         | Definition
-----------------------------|-----------
`PG_MICROLOGGER_DB_HOST`     | Host of the PostgreSQL database instance.
`PG_MICROLOGGER_DB_PORT`     | Port of the PostgreSQL database instance.
`PG_MICROLOGGER_DB_USER`     | Username of the user that will be accessing the database.
`PG_MICROLOGGER_DB_PASSWORD` | Password for the database user.
`PG_MICROLOGGER_DB_NAME`     | Name of the database that will store the log messages.

## Usage

`require` the module in your node.js application and invoke methods accordingly.

```javascript
const micro = require('pg-micrologger');
```

## API

### Check

#### `micro.check.config(callback)`

> Check that your environment variables are set correctly and can be seen by `pg-micrologger`. `callback` returns `'ok'` if config is valid.

#### `micro.check.schema(callback)`

> Check that the database has the correct tables created. `callback` returns `'ok'` if valid.

### Generate

#### `micro.generate.schema(callback)`

> Executes the DDL schema in `./sql/ddl.sql` to populate the `logs` schema of your Postgres database with the correct tables required. `callback` returns `'ok'` when schema is generated successfully.

### Log

All `log` methods expect a `data` object, structured as follows:

```js
let data = {
  application: 'Name of the application logging the message.',
  task: 'Nature of the task that generated the message.',
  message: 'The message text itself.',
  message_json_data: 'JSON object containing additional pertinent information about the message.'
};
```

Also, for each method, `callback` returns `'insert ok'` when the message is logged successfully.

#### `micro.log.critical(data, callback)`

> Logs a *critical* message to your Postgres database.

#### `micro.log.error(data, callback)`

> Logs an *error* message to your Postgres database.

#### `micro.log.warning(data, callback)`

> Logs a *warning* message to your Postgres database.

#### `micro.log.info(data, callback)`

> Logs an *info* message to your Postgres database.

#### `micro.log.debug(data, callback)`

> Logs a *debug* message to your Postgres database.


## Tests

### Using [Yarn](https://yarnpkg.com/):

`yarn test`

### Using [npm](https://www.npmjs.com/):

`npm test`
