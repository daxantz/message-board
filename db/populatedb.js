const { client, Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (255), 
    username VARCHAR (255)
    );


    INSERT INTO messages (text, username)
    VALUES 
    ('Hello dude', 'Dax'),
    ('how are you?', 'anthony')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://dax:Maxbenny2497@localhost:5432/messageboard`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
