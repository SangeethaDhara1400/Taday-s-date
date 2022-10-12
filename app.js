const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  response.send(`${date.getDate()}-${month}-${date.getFullYear()}`);
});

module.exports = app;
app.listen(3000);
