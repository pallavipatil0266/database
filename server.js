import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', function (req, res){
var x = req.body.fname
var s = req.body.lname
var p = req.body.email
var q = req.body.message
var y = "Thank you, "+ x + s + p + q +". we will contact you soon"
 console.log(x, s, p, q, y)
 res.render("contact.ejs", {"text":y })

});

app.get('/home', function (req, res) {
        console.log(__dirname)
        res.render("home.ejs", {})

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
        res.render("contact.ejs", {"text": 'Fill this Form to get Connected With Us'})

});


app.listen(8000, function (res, req) {
        console.log("port is running 8000")
})