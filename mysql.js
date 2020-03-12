const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "petshop"

});

connection.query(
    'select *from users', (err, result, fileds) =>{
        console.log(fileds);
        console.log(result);
    });
