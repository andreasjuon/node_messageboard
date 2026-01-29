const pool = require("./pool");
const { randomUUID } = require("crypto");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows[0];
}

async function insertMessage(username, message) {
    const id = randomUUID();
  await pool.query('INSERT INTO messages (id, username, text, added) VALUES ($1, $2, $3, $4)', [
    id,
    username,
    message,
    new Date(),
  ]);
}

module.exports = {
    getAllMessages,
    getMessageById,
    insertMessage,
};