const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const connection = require("../config/db");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) res.sendStatus(400);
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  connection.query(
    "INSERT INTO users VALUES(?, ?,?, ?, ?, ?, ?, ?)",
    [
      req.body.id_user,
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.password,
      req.body.cv,
      req.body.degree,
      req.body.phone,
    ],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.json(req.body);
    }
  );
});

router.put("/:id", (req, res) => {
  connection.query(
    "UPDATE users SET first_name=?,last_name =?,email=?,password=?,cv=?,degree=?,phone=? WHERE id_user=?",
    [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.password,
      req.body.cv,
      req.body.degree,
      req.body.phone,
      req.params.id,
    ],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.sendStatus(200);
    }
  );
});

router.delete("/:id", (req, res) => {
  connection.query(
    "DELETE FROM users WHERE id_user=?",
    [req.params.id],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.sendStatus(200);
    }
  );
});

module.exports = router;
