// Requiring path to so we can use relative routes to our HTML files
const router = require("express)").Router();
// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");

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

  app.get("/signup", function(req,res){
      if(req.isAuthenticated()){
          res.redirect("/member");
      }else{
         res.render("login"); 
      }
      
  });

  app.get("/member", function(req,res){
      if(req.isAuthenticated()){
          res.redirect("/member");
      }else{
         res.render("member"); 
      }
      
  });

  
};
