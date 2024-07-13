import sql from 'better-sqlite3';
const db = sql('session_data.db');

export const createSession = (data) => {
  return db
    .prepare(
      `INSERT INTO uef_data(state, nonce, is_valid, server, user_id, names, one_time_session_token, launch_data, api_token) 
       VALUES(@state, @nonce, @is_valid, @server, @user_id, @names, @one_time_session_token, @launch_data, @api_token)`,
    )
    .run(data);
};

export const updateSessionData = (data) => {
  return db
    .prepare(
      `UPDATE uef_data 
     SET is_valid = @is_valid, server = @server, user_id = @user_id, names = @names, one_time_session_token = @one_time_session_token, launch_data = @launch_data, api_token = @api_token
     WHERE state = @state
`,
    )
    .run(data);
};

export const getSpecificSession = (id) => {
  return db.prepare(`SELECT * FROM uef_data WHERE state=?`).get(id);
};
