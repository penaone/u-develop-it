const sqlite3 = require('sqlite3').verbose();
<<<<<<< HEAD
// Connect to database
=======
// Connect to database 
>>>>>>> feature/parties
const db = new sqlite3.Database('./db/election.db', err => {
  if (err) {
    return console.error(err.message);
  }
<<<<<<< HEAD

  console.log('Connected to the election database.');

=======
  console.log('Connected to the election database.');
>>>>>>> feature/parties
});
module.exports = db;