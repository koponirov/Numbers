const { Router } = require('express');
const mysql = require('mysql2');
const router = Router();
const connection = mysql.createConnection({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "test",
    password: ""
});

router.get('/table',  (req, res) => {
        const sql = "CALL new_procedure1(10);"
    try{
        connection.query(sql, function(err, data) {

            if (err) return console.log(err);

            const sql1 = "SELECT item, average_num FROM calculated_results;"
            connection.query(sql1, function(err, data) {
                if (err) return console.log(err);
                //передаю ответ в callback res
                res.json(data);
            })

                if (err) return console.log(err);
                const sql2 = "DELETE FROM calculated_results;"
                connection.query(sql2, function(err, data) {
                    if (err) return console.log(err);
            })
        })
    } catch (e) {
        res.status(500).json({message: 'something went wrong, please try again'})
    }
} );

module.exports = router;
