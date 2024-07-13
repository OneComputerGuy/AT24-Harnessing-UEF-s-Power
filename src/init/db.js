console.log();

const sql = require('better-sqlite3');
const db = sql('session_data.db');

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS uef_data (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       state  TEXT NOT NULL UNIQUE,
       nonce TEXT NOT NULL,
       server TEXT NOT NULL,
       user_id TEXT NOT NULL,
       names TEXT NOT NULL,
       one_time_session_token TEXT NOT NULL,
       is_valid BOOLEAN NOT NULL DEFAULT true,
       launch_data TEXT NOT NULL,
       api_token TEXT NOT NULL
    )
`,
).run();
