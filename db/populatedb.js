#! /usr/bin/env node
const pool = require("./pool");
const crypto = require("crypto");

const messages = [
  {
    text: "Hi there! I am using this message board. And I love it. It is awesome. You should try it out.",
    user: "Amando",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "Hello World! Hello everyone. This is a message board. Wow! Hello World. Hello Hello Hello.",
    user: "Charles",
    added: new Date(),
    id: crypto.randomUUID(),
  },
  {
    text: "You dumbass!! You should be more careful with your words. Eric, you are being rude. Your mother would be disappointed. This is a message board, not a place for insults.",
    user: "Red",
    added: new Date(),
    id: crypto.randomUUID(),
  },
];

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY,
  text TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMP NOT NULL
);
`;

async function main() {
  console.log("seeding...");
  await pool.query(SQL);

  for (const msg of messages) {
    await pool.query(
      "INSERT INTO messages (id, text, username, added) VALUES ($1, $2, $3, $4)",
      [msg.id, msg.text, msg.user, msg.added]
    );
  }

  await pool.end();
  console.log("done");
}

main();
