const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Dockerized basic NodeApp" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`The app is up at PORT ${port}`);
});
