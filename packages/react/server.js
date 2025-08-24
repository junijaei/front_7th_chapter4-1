import express from "express";
import { renderToString } from "react-dom/server";
import { createElement } from "react";

const prod = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5174;
const base = process.env.BASE || (prod ? "/front_7th_chapter4-1/react/" : "/");

const app = express();

app.get("*all", (req, res) => {
  res.send(
    `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React SSR</title>
</head>
<body>
<div id="app">${renderToString(createElement("div", null, "안녕하세요"))}</div>
</body>
</html>
  `.trim(),
  );
});

// Start http server
app.listen(port, () => {
  console.log(`React Server started at http://localhost:${port}`);
});
