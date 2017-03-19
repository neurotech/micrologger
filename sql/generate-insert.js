const _escape = (str) => {
  return str.replace(/'/g, "''");
};

module.exports = (level, data) => {
  let sql = `INSERT INTO logs.${level} (application, domain, task, message, message_timestamp) VALUES ('${data.application}', '${data.domain}', '${data.task}', '${_escape(data.message)}', transaction_timestamp());`;
  return sql;
};
