const path = require('path')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// console.log(__filename)
// console.log( path.join(__dirname, '../public'))

//setting up handlebars (hbs) to be view engine +
//setting custom views path +
//registering partials
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, '../views/templates'));
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname , '../views/partials'), function (err) {});

const publicDirPath = path.join(__dirname, '../public/')
app.use(express.static(publicDirPath))//replaces default path below if serving static assets, else
//sets this path as the root of the app for serving assets (html, css, images, scripts, etc.)

app.get("", (req, res)=>{
    res.render("index", {title: "welcome home", name: "sheryl bee"});
})

app.get("/about", (req, res)=>{
    res.render("about", {title: "bout it bout it", name: "sheryl bee"});
})

app.get("/help", (req, res)=>{
    res.render("help", {title: "send help.", name: "sheryl bee"});
})

app.get("/weather", (req, res)=>{
    res.send({location:"philly", forecast: "looks like rain, sucka"});
})

app.listen(port);