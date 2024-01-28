import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', function (req, res){
 console.log(req.body)

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
        res.render("home.ejs", {})

});


app.listen(8000, function (res, req) {
        console.log("server start")
})