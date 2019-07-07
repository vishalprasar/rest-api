const mongoose = require('mongoose')
const express = require('express')
let blogController = require('./../controllers/blogs')
const appConfig = require('./../config/appConfig')

let setRouter = (app) =>{

    let baseUrl = appConfig.apiVersion+'/blogs';
    app.get(baseUrl+'/all',blogController.getAllBlogs)
    app.get('/test/route/:param1/:param2', blogController.testRoute)
    app.get('/test/query',blogController.testQuery)
    app.post('/test/body',blogController.testBody)
    app.get('/hello-world',blogController.helloworld)
    app.get('/example',blogController.example)
}
module.exports = {
    setRouter: setRouter
}