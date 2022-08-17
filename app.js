const express = require("express");

const app = express();

const users = require("./routes/userRoutes");

app.use(express.json());

app.use("/items", users);

app.listen(3000, function () {
  console.log(`Server starting on port 3000`);
});
