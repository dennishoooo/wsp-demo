import { Client } from "pg";

export const client = new Client({
  user: "postgres",
  database: "wsp-demo",
  password: "postgres",
});

export async function ariel() {
  await client.connect();
  console.log("database connected");
  let result = await client.query("select * from users where username='ariel'");
  console.log(result.rows);
  await client.end();
}

// ariel();
