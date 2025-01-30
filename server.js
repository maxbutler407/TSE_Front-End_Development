const express = require('express'); // provides framework for creating servers
const sqlite3 = require('sqlite3').verbose(); // allows interaction w an SQLite database
const cors = require('cors'); // enables CORS (allowing requests from a frontend running on a different origin (eg. a React app))

// sets up express
const app = express();
app.use(cors());
app.use(express.json());

// connects to the SQLite database
const db = new sqlite3.Database('./sql/database.sqls', (err) => { // connects to a SQLite database located in this address
    if (err == true)
        console.error(error.message)
    else
        console.log('Connected to SQLite database');
});

// API fetches data from the SQL database
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => { // runs this SQL query to to get all the rows from the users table ("rows" contains this data)
        if (err == true)
            res.status(500).json({ error: err.message });
        else
            res.json(rows);
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000')); // the API can be accessed at "http://localhost:3000/users" - think itll load the page once the database is added

// the server can be started using "node server.js" on bash