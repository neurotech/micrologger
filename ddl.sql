CREATE SCHEMA IF NOT EXISTS logs;

CREATE TABLE IF NOT EXISTS logs.critical (
  critical_message_id SERIAL PRIMARY KEY NOT NULL,
  application varchar(128),
  domain varchar(128),
  task varchar(128),
  message text,
  message_timestamp timestamp
);
CREATE TABLE IF NOT EXISTS logs.error (
  error_message_id SERIAL PRIMARY KEY NOT NULL,
  application varchar(128),
  domain varchar(128),
  task varchar(128),
  message text,
  message_timestamp timestamp
);
CREATE TABLE IF NOT EXISTS logs.warning (
  warning_message_id SERIAL PRIMARY KEY NOT NULL,
  application varchar(128),
  domain varchar(128),
  task varchar(128),
  message text,
  message_timestamp timestamp
);
CREATE TABLE IF NOT EXISTS logs.info (
  info_message_id SERIAL PRIMARY KEY NOT NULL,
  application varchar(128),
  domain varchar(128),
  task varchar(128),
  message text,
  message_timestamp timestamp
);
CREATE TABLE IF NOT EXISTS logs.debug (
  debug_message_id SERIAL PRIMARY KEY NOT NULL,
  application varchar(128),
  domain varchar(128),
  task varchar(128),
  message text,
  message_timestamp timestamp
);
