import express from "express";
import path from "path";
import { client } from "./db";

client.connect();

const app = express();
const port = 8080;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

console.log(__dirname);

app.use(express.static("public"));

app.get("/message", (req, res) => {
  res.json({ message: "ariel so stupid" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  let result = await client.query(
    `insert into users (username, password) values ($1, $2)`,
    [username, password]
  );
  console.log(result);
  res.json({ message: "received" });
});

app.use((req, res) => {
  let filePath = path.join(__dirname, "public", "404.html");
  console.log(filePath);
  res.sendFile(path.join(filePath));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// /Users/dennisho/code/wsp-demo

// /Users/dennisho/code/wsp-demo/public/404.html
