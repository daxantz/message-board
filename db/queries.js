const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(username, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1,$2)", [
    username,
    text,
  ]);
}
async function deleteMessage(id) {
  if (!id) {
    throw new Error(`message with id ${id} doesnt exist in the table`);
  }
  await pool.query("DELETE from messages where id = $1", [id]);
}

async function deleteAllMessages() {
  await pool.query("DELETE FROM messages");
}

async function updateMessage(newUsername, newText, id) {
  const result = await pool.query(
    "UPDATE messages SET username = $1, text = $2 WHERE id = $3",
    [newUsername, newText, id]
  );

  return result;
}

module.exports = {
  getAllMessages,
  insertMessage,
  deleteMessage,
  deleteAllMessages,
  updateMessage,
};
