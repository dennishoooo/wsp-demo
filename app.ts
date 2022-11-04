import express from "express";
import path from "path";

const app = express();
const port = 8080;

console.log(__dirname);

app.use(express.static("public"));

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
