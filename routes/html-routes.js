// Requiring path to so we can use relative routes to our HTML files
const express = require("express");
const router = require("express").Router();

// Requiring our models
const db = require("../models");



// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");


//Setup routes to Handlebar Pages
module.exports = function(app){

  app.get("/", function(req,res){
      if(req.isAuthenticated()){
          var user = {
              id: req.session.passport.user,
              isloggedin: req.isAuthenticated()
          }
          res.render("member", user);
      }
      else{
          res.render("signup");
      }
      
  })

  app.get("/login", function(req,res){
      if(req.isAuthenticated()){
          res.redirect("/member");
      }else{
         res.render("login"); 
      }
      
  });

  app.get("/member", function(req,res){
    db.Meal.findAll({include: [db.Foods]})
    .then(function(results) {
        // console.log(results)
        var hbsObj = {
            breakfast: [],
            lunch: [],
            dinner: []
          }
          results.forEach((result) => {
            var mealName = result.dataValues.mealName;
            hbsObj[mealName].push(result.dataValues);
          })
          console.log(hbsObj.breakfast)
        res.render("member", hbsObj);
        });      
            
      
      
  });

  app.delete("/member", function(req,res){
    db.Meal.destroy({include: [db.Foods]})
    .then(function(results) {
        // console.log(results)
        var mealObj = {
            breakfast: [],
            lunch: [],
            dinner: []
          }
          results.forEach((result) => {
            var delitem = result.dataValues.delitem;
            hbsObj[delitem].splice(result.dataValues);
          })
          console.log(hbsObj.breakfast)
        res.render("member", mealObj);
        });      
            
      
      
  });

  
};
