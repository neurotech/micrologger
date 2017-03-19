SELECT json_agg(table_name ORDER BY table_name)
FROM information_schema.tables
WHERE table_schema = 'logs';
