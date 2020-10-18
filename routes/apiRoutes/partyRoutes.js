const express = require('express');
const router = express.Router();
const db = require('../../db/database');
<<<<<<< HEAD

=======
// Get all parties
>>>>>>> feature/parties
router.get('/parties', (req, res) => {
  const sql = `SELECT * FROM parties`;
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
<<<<<<< HEAD

=======
>>>>>>> feature/parties
    res.json({
      message: 'success',
      data: rows
    });
  });
});
<<<<<<< HEAD

router.get('/party/:id', (req, res) => {
  const sql = `SELECT * FROM parties WHERE id = ?`;
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
=======
// Get single party
router.get('/party/:id', (req, res) => {
  const sql = `SELECT * FROM parties WHERE id = ?`;
  const params = [req.params.id];
  db.get(sql, params, (err, rows) => {
>>>>>>> feature/parties
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
<<<<<<< HEAD

    res.json({
      message: 'success',
      data: row
    });
  });
});

router.delete('/party/:id', (req, res) => {
  const sql = `DELETE FROM parties WHERE id = ?`;
  const params = [req.params.id];
  db.run(sql, params, function(err, result) {
=======
    res.json({
      message: 'success',
      data: rows
    });
  });
});
// Delete a party
router.delete('/party/:id', (req, res) => {
  const sql = `DELETE FROM parties WHERE id = ?`
  db.run(sql, req.params.id, function(err, result) {
>>>>>>> feature/parties
    if (err) {
      res.status(400).json({ error: res.message });
      return;
    }
<<<<<<< HEAD

    res.json({ message: 'successfully deleted', changes: this.changes });
  });
});

=======
    res.json({ message: 'deleted', changes: this.changes });
  });
});
>>>>>>> feature/parties
module.exports = router;