import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'
import mysql from 'mysql'

var con = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "pallavi",
        password: "pbcp@123",
        database: "db_pallavi"
});
// var sql =  "create table emp(email varchar(30), username varchar(45), psw varchar(25));"
// con.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
        // con.query(sql, function (err, result) {
        //   if (err) throw err;
        //   console.log("Result: " + result);
        // });
//       });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/home', function (req, res) {
        var a = req.body.email
        var b = req.body.username
        var c = req.body.psw

        var d = "Thank you, " + a + " " + b + " " + c + " . we will contact you soon"
        console.log(a, b, c, d)
        res.render("home.ejs", { "message": d })
var sql = 'select*from emp;'
        con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                con.query(sql, function (err, result, field) {
                  if (err) throw err;
                  console.log("Email: " + result[0].email+'     name:'+result[0].username);
                  console.log("Email: " + result[1].email+'     name:'+result[1].username);
                  console.log("Email: " + result[2].email+'     name:'+result[2].username);
                });
              });
});

app.post('/contact', function (req, res) {
        var x = req.body.fname
        var s = req.body.lname
        var p = req.body.email
        var q = req.body.message
        var y = "Thank you, " + x + " " + s + " " + p + " " + q + ". we will contact you soon"
        console.log(x, s, p, q, y)
        res.render("contact.ejs", { "text": y })


});

app.get('/home', function (req, res) {
        console.log(__dirname)
        res.render("home.ejs", { "message": 'Fill this login to get Connected With Us' })

});
app.get('/about', function (req, res) {
        console.log(__dirname)
        res.render("about.ejs", {})

});
app.get('/services', function (req, res) {
        console.log(__dirname)
        res.render("services.ejs", {})

});

app.get('/contact', function (req, res) {
        console.log(__dirname)
        res.render("contact.ejs", { "text": 'Fill this Form to get Connected With Us' })

});


app.listen(8000, function (res, req) {
        console.log("port is running 8000")
})