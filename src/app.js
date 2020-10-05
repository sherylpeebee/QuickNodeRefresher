const path = require('path')
const express = require("express");
const app = express();

// console.log(__filename)
// console.log( path.join(__dirname, '../public'))

app.set("view engine", "hbs");
const publicDirPath = path.join(__dirname, '../public/')
app.use(express.static(publicDirPath))//replaces default path below if serving static assets, else
//sets this path as the root of the app for serving assets (html, css, images, scripts, etc.)

app.get("", (req, res)=>{
    res.render("index", {title: "kick it up a notch", name: "sheryl bee"});
})

// app.get("/about", (req, res)=>{
//     res.send(about.html);
// })

app.get("/weather", (req, res)=>{
    res.send({location:"philly", forecast: "looks like rain, sucka"});
})

app.listen(3000);