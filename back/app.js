const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connection = require("./config/db");

const port = 3001;
const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("../front"));

app.use("/adverts", require("./routes/adverts.routes"));
app.use("/applications", require("./routes/applications.routes"));
app.use("/firms", require("./routes/firms.routes"));
app.use("/users", require("./routes/users.routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
