const { Router } = require('express');
const mysql = require('mysql2');
const router = Router();
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "test",
    password: ""
});

router.get('/table',  (req, res) => {
        const query = "SELECT AVG(column1) AS average FROM(SELECT column1 FROM random_numbers AS rand_values ORDER BY RAND() LIMIT 100) AS average_table;"
    try{
            pool.query(query, function(err, data) {

            if (err) return console.log(err);
            //передаю ответ в callback res
            res.json(data)

        })
    } catch (e) {
        res.status(500).json({message: 'something went wrong, please try again'})
    }
} );

module.exports = router;
