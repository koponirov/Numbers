// подключение express
const express = require("express");
const config = require('config');
// подключение БД
const mysql = require('mysql2');

// создаем объект приложения
const app = express();

app.use('/api', require('./routes/table.routes'));


const PORT = config.get('port') || 5000;

const mySqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: ""
});
mySqlConnection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
//начинаем прослушивать подключения на порту
app.listen(PORT);











