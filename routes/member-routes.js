// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    /* db.Foods gives access to the Foods model */
  // GET route for getting all of the Foods
    app.get("/api/foods/:id", (req, res) => {
        db.Foods.findAll({
            where: {
              id: req.params.id
            },            
          }).then(function(dbFood) {
            res.json(dbFood);
          });      
    });

    app.post("/api/meals", (req, res) => {
      db.Foods.findOne({
        where: {
          foodName: req.body.foodName
        },            
      }).then(function(dbFood) {
        console.log(dbFood)
        db.Meal.create({
          FoodId: dbFood.id,
          mealName: req.body.mealName,        
        }).then(function(results) {
          // `results` here would be the newly created chirp
          res.end();
        });
      });
    });
  
     
    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/foods", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
        db.Foods.update({
            foodName: req.body.foodName,
            measurment: req.body.measurment,
            unitOfMeasurment: req.body.unitOfMeasurment,
            calories: req.body.calories            
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbFood) {
        res.json(dbFood);
        });
    });
  
    //Route to delete an item
    app.delete("/api/meals/", function(req, res) {
      db.Meal.destroy({
            where: {
              id: req.body.id
            },  
          }).then(function(results) {
          res.json(results);
          });
      });
  };

  