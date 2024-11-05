const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const connection = require("../config/db");


router.get("/", (req, res) => {
  connection.query("SELECT * FROM firms", (err, rows, fields) => {
    if (err) res.sendStatus(400);
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  connection.query(
    "INSERT INTO firms VALUES(?, ?, ?, ?, ?, ?)",
    [
      req.body.id_firm,
      req.body.firm_name,
      req.body.headquarters,
      req.body.industry,
      req.body.email,
      req.body.password,
    ],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.json(req.body);
    }
  );
});

router.put("/:id", (req, res) => {
  connection.query(
    "UPDATE firms SET firm_name=?,headquarters =?,industry=?,email=?,password=? WHERE id_firm=?",
    [
      req.body.firm_name,
      req.body.headquarters,
      req.body.industry,
      req.body.email,
      req.body.password,
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
    "DELETE FROM firms WHERE id_firm=?",
    [req.params.id],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.sendStatus(200);
    }
  );
});

module.exports = router;
