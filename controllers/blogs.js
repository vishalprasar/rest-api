const express = require('express')
const mongoose = require('mongoose')
 const blogModel = mongoose.model('./../models/Blog.js')

let getAllBlogs = (req,res) =>{
    blogModel.find()
    .select('-_v-_id')
    .lean()
    .exec((err,result) =>{
        if(err){
            console.log("error")
            res.send(err)
        }
        else if(result == undefined || result == null || result == '')
        {
            console.log("no blog found")
            res.send("no blog find")
        }
        else{
            console.log("blog found")
            res.send(result)
        }
    })
}


    module.exports = {
        getAllBlogs:getAllBlogs
    }