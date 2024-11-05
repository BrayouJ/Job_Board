const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const connection = require("../config/db");

router.post("/", (req, res) => {
  connection.query(
    "INSERT INTO apply VALUES(?,?,?,?,?)",
    [
      req.body.id_apply,
      req.body.email,
      req.body.password,
      req.body.id_advert,
      req.body.message,
    ],
    (err, rows, fields) => {
      if (err) res.sendStatus(400);
      res.json(req.body);
    }
  );
});

/////////////////////////////////////////////////////////////////////////////////////////////////

// router.get("/", (req, res) => {
//   connection.query("SELECT * FROM apply", (err, rows, fields) => {
//     if (err) res.sendStatus(400);
//     res.json(rows);
//   });
// });

// router.put("/:id", (req, res) => {
//   connection.query(
//     "UPDATE apply SET id_advert=?,id_user=? WHERE id_apply=?",
//     [req.body.id_advert, req.body.id_user, req.params.id],
//     (err, rows, fields) => {
//       if (err) throw err;
//       res.sendStatus(200);
//     }
//   );
// });

// router.delete("/:id", (req, res) => {
//   connection.query(
//     "DELETE FROM apply WHERE id_apply=?",
//     [req.params.id],
//     (err, rows, fields) => {
//       if (err) throw err;
//       res.sendStatus(200);
//     }
//   );
// });

module.exports = router;
