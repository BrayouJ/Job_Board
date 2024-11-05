const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const connection = require("../config/db");

const date = new Date();



router.get("/", (req, res) => {
  connection.query("SELECT * FROM adverts", (err, rows, fields) => {
    if (err) res.sendStatus(400);
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  
  connection.query(
    "INSERT INTO adverts VALUES(?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.id_advert,
      req.body.job_title,
      req.body.id_firm,
      req.body.city,
      req.body.contract_type,
      req.body.contract_duration,
      req.body.salary,
      date,
      req.body.description,
      req.body.degree_required,
      req.body.experience,
      req.body.business_hours,
    ],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.json(req.body);
    }
  );
});

router.put("/:id", (req, res) => {
  connection.query(
    "UPDATE adverts SET job_title=?,id_firm=?,city =?,contract_type=?,contract_duration=?,salary=?,description=?,degree_required=?,experience=?,business_hours=? WHERE id_advert=?",
    [
      req.body.job_title,
      req.body.id_firm,
      req.body.city,
      req.body.contract_type,
      req.body.contract_duration,
      req.body.salary,
      date,
      req.body.description,
      req.body.degree_required,
      req.body.experience,
      req.body.business_hours,
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
    "DELETE FROM adverts WHERE id_advert=?",
    [req.params.id],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.sendStatus(200);
    }
  );
});

module.exports = router;
