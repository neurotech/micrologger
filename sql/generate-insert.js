const _escape = (str) => {
  return str.replace(/'/g, "''");
};

module.exports = (level, data) => {
  let sql = `INSERT INTO logs.${level} (application, task, message, message_json_data, message_timestamp) VALUES ('${data.application}', '${data.task}', '${_escape(data.message)}', '${JSON.stringify(data.message_json_data)}', transaction_timestamp());`;
  return sql;
};
