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

`micro.check.config(params)`
`micro.check.schema(params)`

### Generate

`micro.generate.schema(params)`

### Log

`micro.log.critical(params)`
`micro.log.error(params)`
`micro.log.warning(params)`
`micro.log.info(params)`
`micro.log.debug(params)`
