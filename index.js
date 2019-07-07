const mongoose = require('mongoose')
const express = require('express')
const appConfig = require('./config/appConFig')
const fs = require('fs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//const mod = require('./models/Blog')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function(file)  {
    if(-file.indexOf('.js')){
        console.log("finmding the path");
        console.log(routesPath+'/'+file);
        let route = require(routesPath+'/'+file);
        route.setRouter(app);
    }
});

let modelsPath = './models';
fs.readdirSync(modelsPath).forEach(function(file)  {
    if(-file.indexOf('.js')){

        let route = require(modelsPath+'/'+file);
    }
});

app.get('/', (req,res) => {
    res.send('hello world i am here');
     
    let db = mongoose.connect(appConfig.db.uri,{useMongoClient:true});
})
mongoose.connection.on('error' , function(err) {
    console.log("database connection error")
    console.log(err)
});

mongoose.connection.on('open' , function(err) {
    if(err)
    {
    console.log("database connection error")
    console.log(err)
    }
    else{
        console.log("connection success")
    }
});
app.listen(appConfig.port, () => console.log("listening onn "))
